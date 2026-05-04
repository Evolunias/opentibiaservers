import spriteMapping from '@/public/data/sprite-mapping.json';

// Configuration - change these to control sprite behavior
const SPRITE_CONFIG = {
  useLocalSprites: true,   // Use local sprites from public/sprites/items/
  fallbackToExternal: true, // Fallback to external URL if local sprite not found
  spriteDir: '/sprites/items',    // Directory where local sprites are stored (updated to items subdirectory)
  externalBaseUrl: 'https://evolisca.com/images/items2' // External sprite source
};

/**
 * Normalize item name for sprite lookup
 * Converts to lowercase, removes extra spaces, handles special characters
 * @param {string} name - Item name to normalize
 * @returns {string} - Normalized name
 */
function normalizeItemName(name) {
  if (!name) return '';
  return String(name)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ') // Collapse multiple spaces
    .replace(/\(.*?\)/g, '') // Remove parenthetical content like "(charm)"
    .trim(); // Trim again after removing parentheticals
}

/**
 * Get sprite ID for an item
 * Uses smart lookup: exact match -> partial match -> ID lookup
 * @param {string} itemNameOrId - Item name or ID
 * @returns {string|null} - Sprite ID or null if not found
 */
export function getSpriteId(itemNameOrId) {
  if (!itemNameOrId) return null;

  const normalized = normalizeItemName(itemNameOrId);
  if (!normalized) return null;

  // Try exact match first
  let spriteData = spriteMapping.items[normalized];
  if (spriteData) return spriteData.id;

  // Try ID lookup if input looks like a number
  if (/^\d+$/.test(String(itemNameOrId).trim())) {
    const id = String(itemNameOrId).trim();
    if (spriteMapping.items[id]) {
      return spriteMapping.items[id].id;
    }
  }

  return null;
}

/**
 * Get sprite URL for an item by name or ID
 * Returns local URL with external fallback
 * @param {string} itemNameOrId - Item name or ID
 * @returns {string|null} - Sprite URL or null if not found
 */
export function getSpriteUrl(itemNameOrId) {
  const spriteId = getSpriteId(itemNameOrId);

  if (!spriteId) return null;

  // Return local sprite if configured, with fallback to external
  if (SPRITE_CONFIG.useLocalSprites) {
    const localUrl = `${SPRITE_CONFIG.spriteDir}/${spriteId}.gif`;
    return localUrl; // Browser will automatically fallback to external if 404
  }

  // Otherwise return external URL
  return `${SPRITE_CONFIG.externalBaseUrl}/${spriteId}.gif`;
}

/**
 * Get sprite information for an item
 * @param {string} itemNameOrId - Item name or ID
 * @returns {object|null} - Sprite data object or null if not found
 */
export function getSpriteData(itemNameOrId) {
  if (!itemNameOrId) return null;

  const spriteId = getSpriteId(itemNameOrId);
  if (!spriteId) return null;

  const normalized = normalizeItemName(itemNameOrId);
  const spriteData = spriteMapping.items[normalized];

  if (!spriteData) return null;

  return {
    ...spriteData,
    url: getSpriteUrl(itemNameOrId),
    localPath: `${SPRITE_CONFIG.spriteDir}/${spriteId}.gif`,
    externalUrl: `${SPRITE_CONFIG.externalBaseUrl}/${spriteId}.gif`
  };
}

/**
 * Check if a sprite mapping exists for an item
 * @param {string} itemNameOrId - Item name or ID
 * @returns {boolean}
 */
export function hasSpriteMapping(itemNameOrId) {
  return getSpriteData(itemNameOrId) !== null;
}

/**
 * Get all mapped items
 * @returns {object} - All sprite mappings
 */
export function getAllSpriteMappings() {
  return spriteMapping.items;
}

/**
 * Update sprite configuration at runtime
 * @param {object} config - Configuration object
 */
export function setSpriteConfig(config) {
  Object.assign(SPRITE_CONFIG, config);
}

/**
 * Get current sprite configuration
 * @returns {object} - Current configuration
 */
export function getSpriteConfig() {
  return { ...SPRITE_CONFIG };
}

/**
 * Get sprite mapping version and metadata
 * @returns {object}
 */
export function getSpriteMappingInfo() {
  return {
    version: spriteMapping.version,
    lastUpdated: spriteMapping.lastUpdated,
    totalItems: Object.keys(spriteMapping.items).length,
    description: spriteMapping.description
  };
}
