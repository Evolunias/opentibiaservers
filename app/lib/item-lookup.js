import itemsData from '@/public/data/items.json';

// Build a lookup map of item names to their descriptions
let itemLookupMap = null;

function buildItemLookupMap() {
  if (itemLookupMap) return itemLookupMap;

  const map = new Map();

  // Index all items from equipment slots
  if (itemsData.equipment_slots) {
    Object.entries(itemsData.equipment_slots).forEach(([slotKey, slotData]) => {
      if (slotData.items && Array.isArray(slotData.items)) {
        slotData.items.forEach((item) => {
          const key = item.name.toLowerCase();
          map.set(key, {
            name: item.name,
            tier: item.tier,
            description: item.description || 'No description available',
            slot: slotData.label,
            stats: item.stats || {},
            level_requirement: item.level_requirement,
          });
        });
      }
    });
  }

  // Index all items from weapons
  if (itemsData.weapons) {
    Object.entries(itemsData.weapons).forEach(([weaponType, weaponData]) => {
      if (weaponData.items && Array.isArray(weaponData.items)) {
        weaponData.items.forEach((item) => {
          const key = item.name.toLowerCase();
          map.set(key, {
            name: item.name,
            tier: item.tier,
            description: item.description || `${weaponData.label} for ${item.vocation || 'all classes'}`,
            slot: weaponData.label,
            stats: item.stats || {},
            attack: item.attack,
            defense: item.defense,
            level_requirement: item.level_requirement,
            vocation: item.vocation,
          });
        });
      }
    });
  }

  itemLookupMap = map;
  return map;
}

export function getItemDescription(itemName) {
  const map = buildItemLookupMap();
  const key = itemName.toLowerCase();
  
  if (map.has(key)) {
    return map.get(key);
  }

  // Try partial matches for items with variations
  for (const [mapKey, value] of map.entries()) {
    if (mapKey.includes(key) || key.includes(mapKey)) {
      return value;
    }
  }

  // Return basic info if not found in database
  return {
    name: itemName,
    description: 'Item information not available',
  };
}

export function getAllItemDescriptions() {
  return buildItemLookupMap();
}
