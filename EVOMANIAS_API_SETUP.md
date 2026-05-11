# Evomanias API Setup Guide

This guide explains how to integrate Evomanias with your custom MySQL backend or configure the API endpoints.

## Environment Variables

Add these to your `.env.local` file:

```env
# Evomanias API Configuration
NEXT_PUBLIC_EVOMANIAS_API_URL=http://localhost:8000/api
EVOMANIAS_API_SECRET=your-secret-key-here
```

For production, update `NEXT_PUBLIC_EVOMANIAS_API_URL` to your live API domain:

```env
NEXT_PUBLIC_EVOMANIAS_API_URL=https://api.evomanias.com/api
```

## API Endpoints Required

Your backend API should implement the following endpoints. The frontend will make requests to these endpoints:

### 1. **Highscores** - `GET /api/highscores`

Fetch ranked characters.

**Query Parameters:**
- `vocation` (optional): Filter by vocation (Knight, Sorcerer, Cleric, Ranger, Paladin)
- `search` (optional): Search by character name
- `sort` (optional): Sort by 'level' or 'experience'
- `limit` (optional): Maximum number of results (default: 100)

**Response:**
```json
{
  "highscores": [
    {
      "rank": 1,
      "character": "DragonSlayer",
      "level": 450,
      "experience": 1234567890,
      "vocation": "Knight",
      "world": "Evomanias"
    }
  ],
  "total": 150
}
```

---

### 2. **Character Details** - `GET /api/characters/{characterId}`

Fetch details for a specific character.

**Response:**
```json
{
  "character": {
    "id": "char_123",
    "name": "DragonSlayer",
    "level": 450,
    "experience": 1234567890,
    "vocation": "Knight",
    "world": "Evomanias",
    "status": "alive",
    "lastLogin": "2024-01-15T10:30:00Z",
    "createdAt": "2023-06-01T00:00:00Z"
  }
}
```

---

### 3. **User Characters** - `GET /api/users/{userId}/characters`

Fetch all characters for a user.

**Headers:**
- `Authorization: Bearer {userId}`

**Response:**
```json
{
  "characters": [
    {
      "id": "char_123",
      "name": "DragonSlayer",
      "level": 450,
      "vocation": "Knight",
      "experience": 1234567890
    },
    {
      "id": "char_124",
      "name": "MageOfFire",
      "level": 420,
      "vocation": "Sorcerer",
      "experience": 1100000000
    }
  ]
}
```

---

### 4. **Create Character** - `POST /api/characters`

Create a new character for the authenticated user.

**Headers:**
- `Content-Type: application/json`
- `Authorization: Bearer {userId}`

**Body:**
```json
{
  "name": "NewCharacter",
  "vocation": "Knight",
  "userId": "user_123"
}
```

**Response:**
```json
{
  "character": {
    "id": "char_125",
    "name": "NewCharacter",
    "level": 1,
    "vocation": "Knight",
    "experience": 0,
    "createdAt": "2024-01-15T12:00:00Z"
  }
}
```

---

### 5. **Delete Character** - `DELETE /api/characters/{characterId}`

Delete a character.

**Headers:**
- `Authorization: Bearer {userId}`

**Response:**
```json
{
  "success": true,
  "message": "Character deleted successfully"
}
```

---

### 6. **Server Status** - `GET /api/status`

Get server status and player count.

**Response:**
```json
{
  "status": "online",
  "playersOnline": 1250,
  "maxPlayers": 5000,
  "uptime": 99.9,
  "lastUpdate": "2024-01-15T12:30:00Z"
}
```

---

## Integration Example (Node.js/Express)

Here's a basic example of how to implement the API endpoints:

```javascript
const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Verify authorization header
const verifyAuth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });
  req.userId = token; // In production, verify the token properly
  next();
};

// Get highscores
app.get('/api/highscores', async (req, res) => {
  try {
    const { vocation, search, sort, limit } = req.query;
    
    // Query your MySQL database
    let query = 'SELECT * FROM characters';
    const params = [];
    
    if (vocation) {
      query += ' WHERE vocation = ?';
      params.push(vocation);
    }
    
    if (search) {
      query += vocation ? ' AND name LIKE ?' : ' WHERE name LIKE ?';
      params.push(`%${search}%`);
    }
    
    query += ` ORDER BY level DESC LIMIT ${limit || 100}`;
    
    const characters = await db.query(query, params);
    
    res.json({
      highscores: characters.map((char, idx) => ({
        rank: idx + 1,
        ...char
      })),
      total: characters.length
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get user characters
app.get('/api/users/:userId/characters', verifyAuth, async (req, res) => {
  try {
    const characters = await db.query(
      'SELECT * FROM characters WHERE account_id = ?',
      [req.params.userId]
    );
    res.json({ characters });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create character
app.post('/api/characters', verifyAuth, async (req, res) => {
  try {
    const { name, vocation } = req.body;
    
    const result = await db.query(
      'INSERT INTO characters (account_id, name, vocation, level, experience) VALUES (?, ?, ?, 1, 0)',
      [req.userId, name, vocation]
    );
    
    res.json({
      character: {
        id: result.insertId,
        name,
        vocation,
        level: 1,
        experience: 0
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get server status
app.get('/api/status', async (req, res) => {
  try {
    const status = await db.query('SELECT COUNT(*) as online FROM characters WHERE online = 1');
    res.json({
      status: 'online',
      playersOnline: status[0].online,
      maxPlayers: 5000,
      uptime: 99.9,
      lastUpdate: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(8000, () => console.log('API running on :8000'));
```

---

## Testing the API

You can test the endpoints using curl or Postman:

```bash
# Get highscores
curl http://localhost:8000/api/highscores?limit=10

# Get server status
curl http://localhost:8000/api/status

# Create character (requires auth)
curl -X POST http://localhost:8000/api/characters \
  -H "Authorization: Bearer user_123" \
  -H "Content-Type: application/json" \
  -d '{"name":"TestChar","vocation":"Knight"}'
```

---

## Production Deployment

1. Set `NEXT_PUBLIC_EVOMANIAS_API_URL` to your production API domain
2. Ensure all API endpoints are secured with proper authentication
3. Use HTTPS for all API calls
4. Implement rate limiting to prevent abuse
5. Add CORS headers to allow requests from your frontend domain

For production security, implement proper JWT token validation instead of passing userId directly in the Authorization header.
