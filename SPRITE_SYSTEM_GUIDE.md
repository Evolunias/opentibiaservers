# Sprite System Guide

## Overview

This guide explains how the sprite system works for sourcing item sprites from creatures and displaying them across all pages.

## Architecture

### Key Files

1. **`public/data/sprite-mapping.json`** - Central sprite database with all item-to-sprite mappings
2. **`app/lib/sprite-utils.js`** - Utility functions for accessing sprite URLs and data
3. **Updated Components**:
   - `app/creatures/page.jsx` - Uses sprite utilities for creature loot items
   - `app/items/ItemsClient.jsx` - Uses sprite utilities for equipment display
   - `app/items/page.jsx` - Uses sprite mapping for enriching items with IDs

## How It Works

### Sprite Mapping Structure

The `sprite-mapping.json` file contains:

```json
{
  "version": "1.0",
  "lastUpdated": "2024-04-14",
  "items": {
    "item name (lowercase)": {
      "id": "sprite_id",
      "name": "Display Name",
      "category": "category_name"
    }
  },
  "idToName": {
    "sprite_id": "item name (lowercase)"
  }
}
```

### Sprite Utility Functions

Located in `app/lib/sprite-utils.js`:

```javascript
// Get sprite URL for an item (by name or ID)
getSpriteUrl(itemNameOrId)

// Get detailed sprite data
getSpriteData(itemNameOrId)

// Get just the sprite ID
getSpriteId(itemNameOrId)

// Check if mapping exists
hasSpriteMapping(itemNameOrId)

// Get all mapped items
getAllSpriteMappings()

// Configuration management
setSpriteConfig(config)
getSpriteConfig()
```

## Current Configuration

### Sprite Sources

**External URL (Default)**
- Source: `https://evolisca.com/images/items2/{id}.gif`
- Used when local sprites are not available
- Fallback: Automatically used if sprite mapping returns no URL

**Local Sprites (Optional)**
- Location: `public/sprites/` directory
- Format: `{id}.gif` (e.g., `public/sprites/2152.gif`)
- To enable: Set `useLocalSprites: true` in `app/lib/sprite-utils.js`

### Current Setting
```javascript
const SPRITE_CONFIG = {
  useLocalSprites: false,  // Set to true when sprites are downloaded
  fallbackToExternal: true, // Falls back to external if local unavailable
  spriteDir: '/sprites',
  externalBaseUrl: 'https://evolisca.com/images/items2'
};
```

## How to Download Sprites Locally

### Option 1: Using the Provided Script

A download script is available at `scripts/download-sprites.mjs`:

```bash
node scripts/download-sprites.mjs
```

This script will:
1. Read all item IDs from `sprite-mapping.json`
2. Download sprites from evolisca.com to `public/sprites/`
3. Create/update the sprite mapping file

### Option 2: Manual Download

Use a tool like `wget` or `curl` in a loop:

```bash
# Create sprites directory
mkdir -p public/sprites

# Download a specific sprite
curl -o public/sprites/2152.gif https://evolisca.com/images/items2/2152.gif
```

### Option 3: Bulk Download

You can modify the download script or use a third-party tool to batch download all sprites listed in `sprite-mapping.json`.

## Enabling Local Sprites

Once sprites are downloaded to `public/sprites/`:

1. Open `app/lib/sprite-utils.js`
2. Change `useLocalSprites: false` to `useLocalSprites: true`
3. The system will now serve sprites from local files
4. If a local sprite is missing, it automatically falls back to external URL (if enabled)

```javascript
const SPRITE_CONFIG = {
  useLocalSprites: true,  // ← Change this
  fallbackToExternal: true,
  spriteDir: '/sprites',
  externalBaseUrl: 'https://evolisca.com/images/items2'
};
```

## Item Sprite Matching

### How Items Get Sprites

1. **By Item Name** - Looks up item name (case-insensitive) in sprite mapping
   ```javascript
   getSpriteUrl("Ominous Helmet") // Returns sprite URL
   ```

2. **By Item ID** - Falls back to ID lookup
   ```javascript
   getSpriteUrl("40860") // Returns sprite URL
   ```

3. **Automatic Fallback** - Uses external URL as last resort
   ```javascript
   getSpriteUrl(item.name) || `https://evolisca.com/images/items2/${item.id}.gif`
   ```

### Pages Updated for Sprite Sourcing

#### 1. Creatures Page (`app/creatures/page.jsx`)
- Displays creature loot with sprites
- Uses: `getSpriteUrl(item.name)` for each dropped item
- Matches items from creature-loot.json with sprite mapping

#### 2. Items Page (`app/items/page.jsx`)
- Displays all equipment organized by slot
- Uses: Enriches items with IDs from sprite mapping
- Shows: 100+ equipment items across 13 categories

#### 3. Items Client (`app/items/ItemsClient.jsx`)
- Component that renders item cards
- Uses: `getSpriteUrl(item.name)` with fallback to item ID
- Shows: Item sprite, name, tier, and stats

## Equipment Categories with Sprite Support

All these categories now have sprite support:

1. **Melee Weapons** - Swords, axes, maces
2. **Distance Weapons** - Crossbows, bows
3. **Wands & Rods** - Mage weapons
4. **Helmets** - Head protection
5. **Armors** - Body protection
6. **Shields** - Defense equipment
7. **Legs** - Leg protection
8. **Boots** - Footwear
9. **Amulets** - Neck items
10. **Rings** - Finger items
11. **Ammo Slot** - Special items/charms
12. **Charms** - Charm slots

## Sprite Statistics

- **Total Mapped Items**: 80+
- **Unique Sprite IDs**: 83
- **Categories**: 13
- **Last Updated**: 2024-04-14

## Troubleshooting

### Sprites Not Showing

1. Check browser console for 404 errors
2. Verify sprite ID is correct in mapping
3. If using local sprites, ensure files exist in `public/sprites/`
4. Check that `useLocalSprites` setting is correct
5. Fallback mechanism will use external URL automatically

### Adding New Items

1. Find the sprite ID from evolisca.com
2. Add entry to `sprite-mapping.json`:
   ```json
   {
     "items": {
       "item name": {
         "id": "sprite_id",
         "name": "Display Name",
         "category": "category"
       }
     },
     "idToName": {
       "sprite_id": "item name"
     }
   }
   ```
3. Update affected pages if needed
4. Optionally download sprite if using local storage

### Debugging Sprite Issues

Enable debug output by modifying sprite-utils.js:

```javascript
export function getSpriteUrl(itemNameOrId) {
  if (!itemNameOrId) return null;
  const normalized = String(itemNameOrId).toLowerCase().trim();
  console.log(`[SPRITE] Looking up: ${itemNameOrId} (${normalized})`);
  // ... rest of function
}
```

## Performance Considerations

- **External URLs**: ~30-50ms per image (network dependent)
- **Local Sprites**: ~5-10ms per image (filesystem cached)
- **Mapping Lookup**: <1ms (in-memory JSON)
- **Lazy Loading**: Sprites load with component render

## Future Improvements

Potential enhancements:

1. Image optimization (WebP conversion)
2. Sprite sheet generation for batch loading
3. Service worker caching for external sprites
4. CDN integration for fast delivery
5. Sprite preloading for common items
6. Batch download utilities

## References

- Creature loot data: `public/data/creature-loot.json`
- Item data: `public/data/items.json`
- Sprite data: `public/data/item-sprites.json`
- Sprite mapping: `public/data/sprite-mapping.json`
- External source: https://evolisca.com/
