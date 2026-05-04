# Image Internalization & Management System

## Overview

This system enables you to extract images from Evolisca, organize them locally, and replace all external URLs with internal paths. This provides:

- **Offline Support** - Works without internet connection
- **Performance** - Faster image loading from local storage
- **Control** - Full ownership of assets without external dependencies
- **Coordination** - Consistent file naming for easy reference and automation

## Architecture

### Directory Structure

```
public/
├── images/
│   ├── items/              # Item sprite images
│   │   ├── ominous-helmet.gif
│   │   ├── dragon-scale-boots.gif
│   │   └── ...
│   ├── creatures/          # Creature detail images
│   │   ├── alpha-ape.png
│   │   ├── iron-golem.png
│   │   └── ...
│   └── ui/                 # UI assets (logo, etc)
│       └── logo.png
└── data/
    ├── image-manifest.json # Central image registry
    ├── sprite-mapping.json # Item to sprite ID mapping
    └── ...
```

### Core Files

1. **`public/data/image-manifest.json`** - Central registry of all images
   - Tracks internal paths vs external URLs
   - Download status for each image
   - Metadata and file information

2. **`app/lib/image-utils.js`** - Image utility functions
   - `getImageUrl()` - Get URL for any image
   - `getLogoUrl()` - Get logo specifically
   - `getItemSpriteUrl()` - Get item sprite URL
   - `getCreatureImageUrl()` - Get creature image
   - `resolveImageUrl()` - Smart fallback resolution

3. **`scripts/extract-images.mjs`** - Image extraction script
   - Prepares manifest entries
   - Sets up directory structure
   - Coordinates filename conventions

## File Naming Convention

### Consistency is Key

Files use **normalized names** for easy coordination and reference:

```
Format: [item-or-creature-name].ext
```

**Normalization Rules:**
- Convert to lowercase
- Replace spaces with hyphens
- Remove special characters
- Consolidate multiple hyphens to single hyphen

**Examples:**
- "Ominous Helmet" → `ominous-helmet.gif`
- "Dragon Scale Boots" → `dragon-scale-boots.gif`
- "Alpha Ape" → `alpha-ape.png`
- "Master Archer's Armor" → `master-archers-armor.gif`

This naming maintains coordination with `sprite-mapping.json` keys.

## Configuration System

### Image Utilities Configuration

Located in `app/lib/image-utils.js`:

```javascript
const IMAGE_CONFIG = {
  useLocalImages: false,  // Set to true when images are available locally
  fallbackToExternal: true,  // Fallback to external URL if local unavailable
  imageDir: '/images',    // Base directory for local images
  baseUrl: 'https://evolisca.com'  // External base URL
};
```

### Switching Between External and Local

**To use external URLs (current default):**
```javascript
useLocalImages: false
fallbackToExternal: true
// Result: Always tries external evolisca.com URLs
```

**To use local images with fallback:**
```javascript
useLocalImages: true
fallbackToExternal: true
// Result: Uses local images, falls back to external if missing
```

**To use only local images (requires complete download):**
```javascript
useLocalImages: true
fallbackToExternal: false
// Result: Only serves local images (requires all files)
```

## Image Extraction Process

### Step 1: Prepare Manifest

Run the extraction script to prepare entries:

```bash
node scripts/extract-images.mjs
```

This will:
1. Create manifest entries for all items from `sprite-mapping.json`
2. Create entries for all creatures from `creatures.json`
3. Prepare UI asset entries
4. Set up directory structure

### Step 2: Extract Images Manually

Since evolisca.com has Cloudflare protection, you'll need to manually extract:

**For Item Sprites:**
1. Open browser console on `https://evolisca.com/?subtopic=creatures&creature=Alpha+Ape`
2. Extract images using developer tools
3. Save to `public/images/items/` with normalized names

**For Creature Images:**
1. Visit each creature detail page
2. Right-click and save creature image
3. Name with creature name: `public/images/creatures/[name].png`

**For Logo:**
1. Download from `https://evolisca.com/templates/server/images/logo.png`
2. Save as `public/images/ui/logo.png`

### Step 3: Update Manifest

After downloading images, update `public/data/image-manifest.json`:

```json
{
  "itemSpritesMapping": {
    "items": {
      "ominous-helmet": {
        "name": "Ominous Helmet",
        "id": "40860",
        "externalUrl": "https://evolisca.com/images/items2/40860.gif",
        "internalPath": "/images/items/ominous-helmet.gif",
        "status": "downloaded",  // ← Change to "downloaded"
        "downloadedDate": "2024-04-14"  // ← Add date
      }
    }
  }
}
```

### Step 4: Enable Local Images

Update `app/lib/image-utils.js`:

```javascript
const IMAGE_CONFIG = {
  useLocalImages: true,  // ← Change to true
  fallbackToExternal: true,
  imageDir: '/images',
  baseUrl: 'https://evolisca.com'
};
```

## Component Integration

### Updated Components

All these components now use the image system:

1. **`app/layout.jsx`** - Logo
   - Uses: `getLogoUrl()`
   - Falls back to external if local unavailable

2. **`app/creatures/page.jsx`** - Creature loot items
   - Uses: `getItemSpriteUrl(itemName)`
   - Tries local → sprite mapping → external

3. **`app/items/ItemsClient.jsx`** - Equipment display
   - Uses: `getItemSpriteUrl(item.name)`
   - Shows item sprites with fallback

### Resolution Chain

The system uses a smart fallback chain:

```
getItemSpriteUrl(itemName)
  ↓ (if local image found)
/images/items/[name].gif
  ↓ (if not found, tries sprite mapping)
https://evolisca.com/images/items2/[id].gif
  ↓ (if both fail, uses null)
Image won't load (hidden by onError handler)
```

## Utility Functions

### Core Functions

```javascript
// Get URL with smart fallback
getImageUrl(imageKey, category, fallbackUrl)

// Get complete image data
getImageData(imageKey, category)

// Specific getters
getLogoUrl()
getItemSpriteUrl(itemName)
getCreatureImageUrl(creatureName)

// Path building
getInternalImagePath(imageKey, category, extension)
getExternalImageUrl(path)

// Checks
hasImageData(imageKey, category)
getCategoryImages(category)

// Configuration
setImageConfig(config)
getImageConfig()
getImageManifestInfo()

// Smart resolution
resolveImageUrl(itemName, itemId, fallbackUrl)
```

### Usage Examples

```javascript
import { getImageUrl, getLogoUrl, getItemSpriteUrl } from '@/app/lib/image-utils';

// Get logo for header
const logo = getLogoUrl();

// Get item sprite
const sword = getItemSpriteUrl('Ominous Helmet');

// Get image by category
const image = getImageUrl('alpha-ape', 'creatures');

// Resolve with smart fallback
const url = resolveImageUrl('Dragon Boots', '11118');

// Check if image exists
if (hasImageData('logo', 'ui')) {
  console.log('Logo found in manifest');
}
```

## Image Statistics

Current inventory:

- **Item Sprites**: 80+ mapped from sprite-mapping.json
- **Creatures**: All creatures from creatures.json ready for images
- **UI Assets**: Logo and navigation assets
- **Total Size**: Varies by compression (GIFs can be 5-50KB each)

## Downloading Images Programmatically

If you have internet access and want to automate downloads:

```bash
# Create a Python script to download based on manifest
python scripts/download-images.py

# Or use wget in a loop
while IFS= read -r id; do
  wget "https://evolisca.com/images/items2/${id}.gif" \
    -O "public/images/items/${id}.gif"
done < item_ids.txt
```

## Performance Considerations

### Local Images
- Load time: 5-20ms (filesystem/cache)
- Bandwidth: Minimal
- Offline: ✓ Fully supported

### External URLs (Current)
- Load time: 100-300ms (network dependent)
- Bandwidth: ~50-100KB per page load
- Offline: ✗ Not supported

### Estimated Improvement
- Page load speed: **50-80% faster** with local images
- Bandwidth reduction: **~80-90%**
- Offline capability: ✓ Enabled

## Troubleshooting

### Images Not Loading

1. **Check image exists:**
   ```bash
   ls -la public/images/items/ | head
   ls -la public/images/ui/
   ```

2. **Verify manifest entry:**
   ```bash
   grep "ominous-helmet" public/data/image-manifest.json
   ```

3. **Check configuration:**
   ```javascript
   import { getImageConfig } from '@/app/lib/image-utils';
   console.log(getImageConfig());
   ```

4. **Check browser console** for 404 errors

### Manifest Not Updated

Re-run the extraction script:
```bash
node scripts/extract-images.mjs
```

### Adding New Images

1. Download image to appropriate directory
2. Use normalized filename convention
3. Update `image-manifest.json` with entry:
   ```json
   {
     "itemSpritesMapping": {
       "items": {
         "new-item": {
           "name": "New Item",
           "id": "12345",
           "externalUrl": "https://...",
           "internalPath": "/images/items/new-item.gif",
           "status": "downloaded",
           "downloadedDate": "2024-04-14"
         }
       }
     }
   }
   ```

## Migration Strategy

### Phase 1: Preparation (Current)
- ✓ Directory structure created
- ✓ Image utilities implemented
- ✓ Manifest system ready
- ✓ Components updated with fallback

### Phase 2: Extraction
- Manual or automated image download
- Manifest updates with real paths
- Testing with local images

### Phase 3: Deployment
- Set `useLocalImages: true`
- Verify all images load
- Remove external fallback if desired

## Future Enhancements

Potential improvements:

1. **Bulk Download Tools** - Automated image fetching with proxy
2. **Image Optimization** - WebP conversion, compression
3. **CDN Integration** - Serve from content delivery network
4. **Image Preloading** - Load common images on page init
5. **Sprite Sheets** - Combine images for faster loading
6. **Service Worker** - Cache for offline-first experience

## References

- Image utilities: `app/lib/image-utils.js`
- Manifest: `public/data/image-manifest.json`
- Sprite mapping: `public/data/sprite-mapping.json`
- Extraction script: `scripts/extract-images.mjs`
- Layout (logo): `app/layout.jsx`
- Creatures page: `app/creatures/page.jsx`
- Items page: `app/items/ItemsClient.jsx`
