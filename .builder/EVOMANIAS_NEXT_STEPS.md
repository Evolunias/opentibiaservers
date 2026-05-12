# EVOMANIAS Standalone Website - Next Steps

## Current Status

✅ **Completed**: EVOMANIAS is now a fully isolated, professional-looking standalone website with:
- Glassmorphic dark theme inspired by Evolunia & Cyntara
- Responsive two-column layout (main content + sidebar)
- Custom header with navigation and search
- Modern footer with links and social media
- Home page with news feed and server status sidebar
- Mock data support for development
- Ready for Aiven MySQL integration

## Immediate Next Steps

### 1. Database Connection Setup (Priority: HIGH)
You'll need to set up your Aiven MySQL database:

```sql
-- Create accounts table
CREATE TABLE accounts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  username VARCHAR(100) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create characters table
CREATE TABLE characters (
  id INT PRIMARY KEY AUTO_INCREMENT,
  account_id INT NOT NULL,
  name VARCHAR(100) UNIQUE NOT NULL,
  level INT DEFAULT 1,
  experience BIGINT DEFAULT 0,
  vocation VARCHAR(50),
  world VARCHAR(100),
  status ENUM('active', 'deleted') DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_login TIMESTAMP,
  FOREIGN KEY (account_id) REFERENCES accounts(id),
  INDEX (level),
  INDEX (experience),
  INDEX (status)
);

-- Create news table
CREATE TABLE news (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  content LONGTEXT NOT NULL,
  posted_by INT NOT NULL,
  category VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (posted_by) REFERENCES accounts(id),
  INDEX (created_at)
);

-- Create guilds table
CREATE TABLE guilds (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) UNIQUE NOT NULL,
  leader_id INT NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (leader_id) REFERENCES accounts(id),
  INDEX (name)
);

-- Create guild_members table
CREATE TABLE guild_members (
  id INT PRIMARY KEY AUTO_INCREMENT,
  guild_id INT NOT NULL,
  character_id INT NOT NULL,
  rank VARCHAR(50),
  joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (guild_id) REFERENCES guilds(id),
  FOREIGN KEY (character_id) REFERENCES characters(id),
  UNIQUE (guild_id, character_id)
);
```

### 2. Environment Variables Setup (Priority: HIGH)
Set up your `.env.local` file with Aiven credentials:

```
AIVEN_MYSQL_HOST=your-aiven-host.aivencloud.com
AIVEN_MYSQL_PORT=3306
AIVEN_MYSQL_USER=your_user
AIVEN_MYSQL_PASSWORD=your_password
AIVEN_MYSQL_DATABASE=your_database

# Optional: API endpoints
NEXT_PUBLIC_EVOMANIAS_API_URL=http://localhost:3000/api
```

### 3. Build Pages (Priority: MEDIUM)

#### 3.1 Highscores Page (`app/evomanias/highscores/page.jsx`)
- Fetch top 100 characters from database
- Add filters: vocation, level range, search by name
- Display in table format with pagination
- Link to character details

```jsx
'use client';
import { useState, useEffect } from 'react';

export default function HighscoresPage() {
  const [characters, setCharacters] = useState([]);
  const [filters, setFilters] = useState({
    vocation: 'all',
    search: '',
    sort: 'level'
  });

  useEffect(() => {
    fetchHighscores();
  }, [filters]);

  const fetchHighscores = async () => {
    const params = new URLSearchParams();
    if (filters.vocation !== 'all') params.append('vocation', filters.vocation);
    if (filters.search) params.append('search', filters.search);
    params.append('sort', filters.sort);

    const res = await fetch(`/api/evomanias/characters?action=highscores&${params}`);
    const data = await res.json();
    setCharacters(data.characters || []);
  };

  return (
    // Component implementation
  );
}
```

#### 3.2 Character Detail Page (`app/evomanias/character/[id]/page.jsx`)
- Display character stats, experience, kills, deaths
- Show guild information
- Display character items/equipment
- Show character timeline (kills, deaths, level ups)

#### 3.3 Account Pages
- `/evomanias/account` - Account dashboard
- `/evomanias/login` - Login form with validation
- `/evomanias/register` - Registration form with email verification

### 4. API Routes (Priority: MEDIUM)

Update existing and create new API routes:

#### Authentication APIs
```
POST /api/evomanias/auth/register
- body: { email, username, password }
- returns: { success, accountId, token }

POST /api/evomanias/auth/login
- body: { email, password }
- returns: { success, token, account }

GET /api/evomanias/auth/me
- requires: auth token
- returns: { account, characters }

POST /api/evomanias/auth/logout
- clears session
```

#### Character APIs
```
GET /api/evomanias/characters?action=highscores
- query: vocation, sort, limit
- returns: { characters: [...] }

GET /api/evomanias/characters/[id]
- returns: { character: {...} }

POST /api/evomanias/characters
- requires: auth token
- body: { name, vocation, world }
- returns: { character: {...} }

DELETE /api/evomanias/characters/[id]
- requires: auth token
- returns: { success: true }
```

#### News/Patches APIs
```
GET /api/evomanias/news?limit=10&offset=0
- returns: { news: [...], total: number }

GET /api/evomanias/news/[id]
- returns: { post: {...} }

POST /api/evomanias/news
- requires: admin auth
- body: { title, content, category }
- returns: { post: {...} }
```

### 5. Authentication Implementation (Priority: HIGH)

Set up JWT-based authentication:

```javascript
// lib/auth.js
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export async function hashPassword(password) {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password, hash) {
  return bcrypt.compare(password, hash);
}

export function generateToken(accountId) {
  return jwt.sign(
    { accountId },
    process.env.JWT_SECRET || 'dev-secret',
    { expiresIn: '7d' }
  );
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET || 'dev-secret');
  } catch (err) {
    return null;
  }
}
```

### 6. Security Improvements (Priority: HIGH)

- Add CSRF protection
- Implement rate limiting on auth endpoints
- Add input validation and sanitization
- Set up HTTPS (if deploying)
- Use secure cookies (httpOnly, sameSite)
- Implement password reset flow
- Add email verification

## File Structure to Create

```
app/evomanias/
├── page.jsx                          (✅ Done)
├── layout.jsx                        (✅ Done)
├── evomanias.css                     (✅ Done)
├── highscores/
│   └── page.jsx                      (❌ Todo)
├── character/
│   └── [id]/
│       └── page.jsx                  (❌ Todo)
├── login/
│   └── page.jsx                      (❌ Todo)
├── register/
│   └── page.jsx                      (❌ Todo)
├── account/
│   └── page.jsx                      (❌ Todo)
├── components/
│   ├── EvomaniasHeader.jsx           (✅ Done)
│   ├── EvomaniasFooter.jsx           (✅ Done)
│   ├── HighscoresTable.jsx           (❌ Todo)
│   ├── CharacterCard.jsx             (❌ Todo)
│   ├── FilterPanel.jsx               (❌ Todo)
│   └── ...
└── news/
    └── page.jsx                      (❌ Todo)

lib/
├── aiven.js                          (✅ Done)
├── auth.js                           (❌ Todo)
└── evomaniasActions.js               (✅ Started)

api/evomanias/
├── auth/
│   └── route.js                      (❌ Todo)
├── characters/
│   └── route.js                      (⚠️ Needs updates)
├── news/
│   └── route.js                      (❌ Todo)
└── status/
    └── route.js                      (❌ Todo)
```

## Component Library

The custom CSS provides these pre-styled components:

```html
<!-- Cards -->
<div class="card">
  <div class="card-header">Title</div>
  <div class="card-body">Content</div>
  <div class="card-footer">Footer</div>
</div>

<!-- Buttons -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-block">Full Width</button>

<!-- Tables -->
<table class="table">
  <thead><tr><th>Header</th></tr></thead>
  <tbody><tr><td>Data</td></tr></tbody>
</table>

<!-- Badges -->
<span class="badge badge-success">Online</span>
<span class="badge badge-danger">Offline</span>

<!-- Post/News -->
<div class="post">
  <div class="post-date">
    <div class="post-date-day">17</div>
    <div class="post-date-month">Apr</div>
  </div>
  <div class="post-body">
    <h2>Title</h2>
    <p>Content</p>
  </div>
</div>

<!-- Forms -->
<input type="text" placeholder="Input">
<input type="email" placeholder="Email">
<input type="password" placeholder="Password">
<select><option>Select</option></select>
<textarea></textarea>
```

## Testing Checklist

- [ ] Highscores page loads and displays characters
- [ ] Highscores filters work (vocation, search)
- [ ] Character detail page displays character info
- [ ] Login form validates and authenticates
- [ ] Registration creates account in database
- [ ] Account dashboard shows user's characters
- [ ] Create character form works
- [ ] News feed displays posts
- [ ] Mobile responsive design works on all pages
- [ ] Database queries are optimized
- [ ] Error handling works gracefully
- [ ] Authentication tokens persist properly

## Performance Optimization

- Add caching for highscores (revalidate every 5 minutes)
- Optimize database queries with proper indexes
- Lazy load images on character pages
- Implement pagination for news feed
- Use database query pagination for highscores
- Add compression for API responses

## Deployment Checklist

- [ ] Set up environment variables on hosting
- [ ] Run database migrations
- [ ] Test all pages on production
- [ ] Set up SSL/HTTPS
- [ ] Configure CDN for static assets
- [ ] Set up monitoring and logging
- [ ] Test backup and recovery procedures
- [ ] Set up automated deployments

## Additional Features (Future)

- Guild management system
- PvP battle log
- Market system
- Achievement tracking
- Clan rankings
- Boss spawn timers
- Event calendar
- Forum/Discussion board
- Direct messaging between players
- Streaming integration
- Mobile app

---

**Status**: Ready for database integration and page development.
**Current Version**: Alpha
**Last Updated**: May 12, 2026
