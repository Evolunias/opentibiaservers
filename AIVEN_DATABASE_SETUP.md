# EVOMANIAS - Aiven MySQL Database Setup Guide

## Connection Details
- **Host**: lisca-lisca.j.aivencloud.com
- **Port**: 11270
- **Database**: defaultdb
- **User**: avnadmin
- **SSL Required**: Yes (automatically configured)

## Required Tables

### 1. Accounts Table
Stores player account information.

```sql
CREATE TABLE accounts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### 2. Players Table
Stores character information for each player account.

```sql
CREATE TABLE players (
  id INT PRIMARY KEY AUTO_INCREMENT,
  account_id INT NOT NULL,
  name VARCHAR(100) UNIQUE NOT NULL,
  vocation VARCHAR(50) NOT NULL DEFAULT 'Knight',
  level INT DEFAULT 1,
  experience BIGINT DEFAULT 0,
  status VARCHAR(50) DEFAULT 'active',
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (account_id) REFERENCES accounts(id) ON DELETE CASCADE
);
```

### 3. Announcements Table
Stores server news, patches, and announcements.

```sql
CREATE TABLE announcements (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  author VARCHAR(100) NOT NULL,
  category VARCHAR(50) DEFAULT 'news',
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### 4. Market Table (Optional - for future marketplace feature)
```sql
CREATE TABLE market (
  id INT PRIMARY KEY AUTO_INCREMENT,
  seller_id INT NOT NULL,
  item_name VARCHAR(255) NOT NULL,
  item_description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  quantity INT DEFAULT 1,
  status VARCHAR(50) DEFAULT 'available',
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (seller_id) REFERENCES accounts(id) ON DELETE CASCADE
);
```

## Available API Endpoints

### Server Status
```
GET /api/evomanias/server-stats
```
Returns current server statistics including online players count and total characters.

### Character Rankings
```
GET /api/evomanias/characters?action=highscores
```
Returns top 100 characters by experience.

### Online Players
```
GET /api/evomanias/online-players
```
Returns all currently online players (status='active').

### Account Authentication
```
POST /api/evomanias/auth
Body: { action: 'login', email: '...', password: '...' }
Body: { action: 'register', email: '...', password: '...', username: '...' }
```

### Character Management
```
GET /api/evomanias/characters?action=list&accountId={id}
GET /api/evomanias/characters?action=detail&characterId={id}
POST /api/evomanias/characters
Body: { action: 'create', accountId: '...', name: '...', vocation: '...' }
```

### Announcements
```
GET /api/evomanias/announcements
POST /api/evomanias/announcements
Body: { title: '...', content: '...', author: '...', category: '...' }
```

## Frontend Integration

The EVOMANIAS homepage now displays:

### 🌐 Server Status Card
- Server status (Online/Offline)
- Number of adventurers online
- Total number of characters created
- Refresh button to get live updates

### 🏆 Top Adventurers
- Top 5 highest-level characters
- Character names with class icons
- Direct links to character profiles
- "Be the first to claim your glory!" message when no players exist

### 📢 News & Updates
- Latest announcements from the announcements table
- Author and publish date
- Category tags (news, patch, event, etc.)
- "No announcements yet" fallback message

## Sample Data for Testing

### Insert Test Account
```sql
INSERT INTO accounts (name, email, password) 
VALUES ('testadmin', 'admin@test.com', '$2b$10$...');
```

### Insert Test Characters
```sql
INSERT INTO players (account_id, name, vocation, level, experience, status)
VALUES 
  (1, 'TestKnight', 'Knight', 50, 1000000, 'active'),
  (1, 'TestSorcerer', 'Sorcerer', 45, 900000, 'active'),
  (1, 'TestPaladin', 'Paladin', 40, 800000, 'active');
```

### Insert Test Announcements
```sql
INSERT INTO announcements (title, content, author, category)
VALUES 
  ('Server Maintenance', 'Scheduled maintenance on Sunday at 2 AM', 'Admin', 'maintenance'),
  ('New Spell Balance', 'Lightning spell damage increased by 10%', 'GameMaster', 'patch'),
  ('Community Tournament', 'Join our PvP tournament this weekend!', 'Events', 'event');
```

## User Interface Features

All text on the homepage uses natural language instead of technical terms:

- **"Adventurers Online"** instead of "Online Players"
- **"Choose Your Class"** instead of "Select Vocation"
- **"Top Adventurers"** instead of "Top Players"
- **"Create My Account"** instead of "Sign Up"
- **"View Rankings"** instead of "View Highscores"
- **"Be the first to claim your glory!"** instead of "No players yet"

## Next Steps

1. Create the database tables using the SQL provided above
2. Insert sample data for testing
3. Create announcements to display on the homepage
4. The homepage will automatically pull and display real data from your database
5. No mock data is used - all information comes directly from Aiven MySQL
