# Aiven MySQL Schema Setup

This document describes the required database tables for the Evomanias website.

## Setup Instructions

1. Connect to your Aiven MySQL database using:
   - Host: `lisca-lisca.j.aivencloud.com`
   - Port: `11270`
   - User: `avnadmin`
   - Password: `AVNS_aAFYhCaAgipj_cBveKk`
   - Database: `defaultdb`

2. Run the SQL commands below to create the required tables.

## Required Tables

### 1. Accounts Table

```sql
CREATE TABLE IF NOT EXISTS accounts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  status VARCHAR(50) DEFAULT 'active',
  INDEX idx_email (email),
  INDEX idx_name (name)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

### 2. Players (Characters) Table

```sql
CREATE TABLE IF NOT EXISTS players (
  id INT PRIMARY KEY AUTO_INCREMENT,
  account_id INT NOT NULL,
  name VARCHAR(255) UNIQUE NOT NULL,
  level INT DEFAULT 1,
  experience BIGINT DEFAULT 0,
  vocation VARCHAR(50) NOT NULL,
  world VARCHAR(100) DEFAULT 'Evomanias',
  status VARCHAR(50) DEFAULT 'active',
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_login TIMESTAMP NULL,
  FOREIGN KEY (account_id) REFERENCES accounts(id) ON DELETE CASCADE,
  INDEX idx_account_id (account_id),
  INDEX idx_name (name),
  INDEX idx_experience (experience DESC),
  INDEX idx_level (level DESC),
  INDEX idx_vocation (vocation)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

## Features

- **Accounts**: User authentication with email and password (bcrypt hashed)
- **Players**: Character management with experience tracking
- **Indexes**: Optimized for queries like highscores, character search, and account lookups

## Next Steps

1. Create these tables in your Aiven MySQL database
2. The application is now ready to handle:
   - User registration and login
   - Character creation and management
   - Highscores with filtering by vocation
   - Account dashboard with character listing

## Notes

- Passwords are stored using bcrypt with salt rounds of 10
- Character experience is tracked as BIGINT to support large numbers
- All timestamps are automatic (created_at, updated_at, last_login)
- Foreign keys ensure account deletion cascades to characters
