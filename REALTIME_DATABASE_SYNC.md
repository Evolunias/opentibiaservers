# Real-Time Database Synchronization Setup

## Overview

Your EVOMANIAS system now has **real-time direct database synchronization**. All pages automatically refresh data from your Aiven MySQL database at regular intervals without requiring manual page refreshes.

## How It Works

### Auto-Refresh Intervals

Each page syncs with your database at different intervals depending on the data type:

- **Homepage**: Every 5 seconds
  - Server stats (online players, total characters)
  - Latest announcements
  - Top 5 adventurers

- **All Players Page** (`/evomanias/players`): Every 3 seconds
  - Full player rankings
  - Filter by class in real-time

- **Online Players Page** (`/evomanias/online`): Every 2 seconds (fastest)
  - Live online player count
  - Player status cards with sync indicator
  - Class distribution stats

### Visual Sync Indicators

- **Syncing** 🟡 (pulsing dot) - Data is being refreshed
- **Synced** 🟢 (solid dot) - Data is current
- **Error** 🔴 (red dot) - Connection issue

Last update timestamp is displayed on each page.

## API Endpoints for Real-Time Data

### 1. Server Statistics
```
GET /api/evomanias/server-stats
```
Returns:
```json
{
  "onlinePlayers": 42,
  "totalCharacters": 156,
  "status": "Online",
  "timestamp": "2024-05-13T10:30:45.123Z"
}
```

### 2. Character Rankings (All Players)
```
GET /api/evomanias/characters?action=highscores
```
Returns array of players with:
- id, name, level, experience, vocation

Optional filter:
```
GET /api/evomanias/characters?action=highscores&vocation=Knight
```

### 3. Online Players List
```
GET /api/evomanias/online-players
```
Returns:
```json
{
  "onlinePlayers": [...players],
  "count": 42,
  "timestamp": "2024-05-13T10:30:45.123Z"
}
```

### 4. Announcements
```
GET /api/evomanias/announcements
POST /api/evomanias/announcements (to create new)
```

## Database Schema Requirements

### Minimum Required Tables

#### players
```sql
CREATE TABLE players (
  id INT PRIMARY KEY AUTO_INCREMENT,
  account_id INT NOT NULL,
  name VARCHAR(100) UNIQUE NOT NULL,
  vocation VARCHAR(50) NOT NULL DEFAULT 'Knight',
  level INT DEFAULT 1,
  experience BIGINT DEFAULT 0,
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### accounts
```sql
CREATE TABLE accounts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### announcements (optional but recommended)
```sql
CREATE TABLE announcements (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  author VARCHAR(100) NOT NULL,
  category VARCHAR(50) DEFAULT 'news',
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

> **Note**: The API is flexible and will work with `news` table if `announcements` doesn't exist.

## Pages with Real-Time Sync

### 🏠 Homepage - `/evomanias`
- Server status (refreshes every 5 seconds)
- Latest news announcements
- Top 5 adventurers
- Quick action buttons

### 🏆 All Players - `/evomanias/players`
- Complete player rankings
- Filter by class (Knight, Paladin, Druid, Sorcerer)
- Level and experience stats
- Real-time updates every 3 seconds

### 🌐 Online Players - `/evomanias/online`
- All currently active players
- Class distribution statistics
- Live player cards with detail links
- Fastest refresh rate (every 2 seconds)

### 👤 Character Profile - `/evomanias/character/[id]`
- Individual character details
- Account information

## Features

### ✅ What's Implemented

1. **Real-Time Syncing**
   - Automatic data refresh at specified intervals
   - No manual refresh needed
   - Background updates continue even while viewing

2. **Flexible Database**
   - Works with your Aiven MySQL setup
   - Graceful error handling
   - Fallbacks if tables don't exist

3. **Natural Language UI**
   - "Adventurers Online" instead of "Players"
   - "Choose Your Class" instead of "Select Vocation"
   - Emoji indicators for classes and status
   - Intuitive navigation

4. **Live Status Indicators**
   - Sync status dot (pulsing when syncing)
   - Last updated timestamp
   - Error messages if connection fails

5. **Responsive Design**
   - Mobile-friendly
   - Works on all screen sizes
   - Touch-friendly buttons and links

## Error Handling

If the database is unavailable:
- Pages display "Unable to load data" message
- Sync indicator shows red dot (Error)
- Last known data is retained on screen
- Automatic retry continues in background

## Database Optimization Tips

1. **Add Indexes for Performance**
```sql
CREATE INDEX idx_player_vocation ON players(vocation);
CREATE INDEX idx_player_level ON players(level DESC);
CREATE INDEX idx_announcements_created ON announcements(created DESC);
```

2. **Monitor Connection Limits**
- Pool is configured for 10 simultaneous connections
- Queries timeout after 30 seconds
- SSL connection required by Aiven

3. **Data Retention**
- No automatic cleanup of old data
- Consider archiving old announcements manually
- Players data is permanent (growth tracking)

## Testing the Sync

1. **Add Test Data**
```sql
INSERT INTO players (account_id, name, vocation, level, experience)
VALUES (1, 'TestPlayer', 'Knight', 50, 1000000);

INSERT INTO announcements (title, content, author, category)
VALUES ('Test News', 'Testing real-time sync', 'Admin', 'news');
```

2. **Observe Live Updates**
- Visit `/evomanias/online` 
- Watch the timestamp update every 2 seconds
- Add new players and see them appear instantly

3. **Test Filters**
- Visit `/evomanias/players`
- Click class filters
- See real-time filtered results

## Troubleshooting

### Data Not Updating

1. **Check Aiven Connection**
   - Verify `AIVEN_MYSQL_HOST`, `AIVEN_MYSQL_PORT`, credentials in `.env.local`
   - Check firewall/network access to Aiven

2. **Verify Tables Exist**
   - Run: `SHOW TABLES;` in Aiven console
   - Create missing tables using SQL provided above

3. **Check Browser Console**
   - Press F12 (DevTools)
   - Look for fetch errors
   - Network tab shows API calls

### Sync Indicator Always "Syncing"

- Likely a persistent connection issue
- Check database availability
- Verify API endpoints are accessible

### Announcements Not Showing

- Create the `announcements` table
- Or use `news` table if preferred
- Insert test data using SQL above

## Future Enhancements

Possible additions:
- Market/trading system page
- Guild rankings page
- Event calendar page
- Player statistics dashboard
- Trade history tracker
- Each would have its own real-time sync

