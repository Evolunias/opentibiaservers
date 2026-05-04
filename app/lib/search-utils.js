import fs from 'fs';
import path from 'path';

// Cache for loaded data
let searchIndexCache = null;

// Load JSON file synchronously (used in server context)
function loadJSON(filename) {
  try {
    const filePath = path.join(process.cwd(), 'public/data', filename);
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.warn(`Failed to load ${filename}:`, error.message);
    return null;
  }
}

// Build the search index from all available data sources
export function buildSearchIndex() {
  if (searchIndexCache) return searchIndexCache;

  const index = [];

  // Load Spells
  const spells = loadJSON('spells.json');
  if (spells && Array.isArray(spells)) {
    spells.forEach((spell) => {
      index.push({
        id: `spell-${spell.name?.replace(/\s+/g, '-').toLowerCase()}`,
        name: spell.name || '',
        category: 'Spell',
        type: spell.type || 'Ability',
        level: spell.level,
        mana: spell.mana,
        description: spell.description || '',
        vocations: spell.vocations || [],
        href: '/spells',
        searchableText: `${spell.name} ${spell.description || ''} ${(spell.vocations || []).join(' ')}`.toLowerCase(),
      });
    });
  }

  // Load Creatures
  const creatures = loadJSON('creatures.json');
  if (creatures && Array.isArray(creatures)) {
    creatures.forEach((creature) => {
      index.push({
        id: `creature-${creature.name?.replace(/\s+/g, '-').toLowerCase()}`,
        name: creature.name || '',
        category: 'Creature',
        rarity: creature.rarity || 'Common',
        experience: creature.experience || 0,
        health: creature.health,
        location: creature.location || '',
        description: creature.description || '',
        href: '/creatures',
        searchableText: `${creature.name} ${creature.description || ''} ${creature.location || ''} ${creature.rarity || ''}`.toLowerCase(),
      });
    });
  }

  // Load Items
  const items = loadJSON('items.json');
  if (items) {
    const processItems = (itemList, slot) => {
      if (Array.isArray(itemList)) {
        itemList.forEach((item) => {
          index.push({
            id: `item-${item.name?.replace(/\s+/g, '-').toLowerCase()}`,
            name: item.name || '',
            category: 'Item',
            slot: slot || item.slot || 'Unknown',
            tier: item.tier || 'Common',
            level_requirement: item.level_requirement,
            stats: item.stats || {},
            attack: item.attack,
            defense: item.defense,
            description: item.description || '',
            href: '/items',
            searchableText: `${item.name} ${item.description || ''} ${slot || item.slot || ''} ${item.tier || ''}`.toLowerCase(),
          });
        });
      }
    };

    // Process equipment slots
    if (items.equipment_slots) {
      Object.entries(items.equipment_slots).forEach(([slot, itemList]) => {
        processItems(itemList, slot);
      });
    }

    // Process weapons
    if (items.weapons) {
      processItems(items.weapons, 'Weapon');
    }
  }

  // Load News
  const news = loadJSON('news.json');
  if (news && Array.isArray(news)) {
    news.forEach((newsItem) => {
      index.push({
        id: `news-${newsItem.id || newsItem.title?.replace(/\s+/g, '-').toLowerCase()}`,
        name: newsItem.title || '',
        category: 'News',
        date: newsItem.date,
        author: newsItem.author,
        summary: newsItem.summary || '',
        description: newsItem.content || newsItem.summary || '',
        href: '/news',
        searchableText: `${newsItem.title} ${newsItem.summary || ''} ${newsItem.content || ''} ${newsItem.author || ''}`.toLowerCase(),
      });
    });
  }

  // Load Features
  const features = loadJSON('features.json');
  if (features && Array.isArray(features)) {
    features.forEach((feature) => {
      index.push({
        id: `feature-${feature.name?.replace(/\s+/g, '-').toLowerCase()}`,
        name: feature.name || '',
        category: 'Feature',
        featureCategory: feature.category || '',
        description: feature.description || '',
        details: feature.details || '',
        href: '/features',
        searchableText: `${feature.name} ${feature.description || ''} ${feature.details || ''} ${feature.category || ''}`.toLowerCase(),
      });
    });
  }

  // Load Gallery
  const gallery = loadJSON('gallery.json');
  if (gallery && Array.isArray(gallery)) {
    gallery.forEach((galleryGroup) => {
      if (galleryGroup.items && Array.isArray(galleryGroup.items)) {
        galleryGroup.items.forEach((item) => {
          index.push({
            id: `gallery-${item.id || item.title?.replace(/\s+/g, '-').toLowerCase()}`,
            name: item.title || '',
            category: 'Gallery',
            description: item.description || '',
            tags: item.tags || [],
            source: item.source || '',
            href: '/gallery',
            searchableText: `${item.title} ${item.description || ''} ${(item.tags || []).join(' ')}`.toLowerCase(),
          });
        });
      }
    });
  }

  // Add main category pages
  const pages = [
    { name: 'Items & Equipment', category: 'Page', href: '/items' },
    { name: 'Spells & Abilities', category: 'Page', href: '/spells' },
    { name: 'Creatures & Bosses', category: 'Page', href: '/creatures' },
    { name: 'Features & Systems', category: 'Page', href: '/features' },
    { name: 'Gallery', category: 'Page', href: '/gallery' },
    { name: 'Upgrade System', category: 'Page', href: '/upgrade-system' },
    { name: 'Talents & Progression', category: 'Page', href: '/talents' },
    { name: 'Quests & Missions', category: 'Page', href: '/quests' },
    { name: 'Bosses & Raids', category: 'Page', href: '/bosses' },
    { name: 'Hunting Grounds', category: 'Page', href: '/hunting' },
    { name: 'Currencies & Tokens', category: 'Page', href: '/currencies' },
    { name: 'NPCs & Vendors', category: 'Page', href: '/npcs' },
    { name: 'Magic Stones', category: 'Page', href: '/magic-stones' },
    { name: 'News & Updates', category: 'Page', href: '/news' },
    { name: 'Server Information', category: 'Page', href: '/server-info' },
  ];

  pages.forEach((page) => {
    index.push({
      id: `page-${page.name.replace(/\s+/g, '-').toLowerCase()}`,
      name: page.name,
      category: page.category,
      href: page.href,
      searchableText: page.name.toLowerCase(),
    });
  });

  searchIndexCache = index;
  return index;
}

// Calculate relevance score for a result
function calculateRelevanceScore(result, searchTerm, searchWords) {
  let score = 0;
  const resultNameLower = result.name.toLowerCase();
  const searchTermLower = searchTerm.toLowerCase();

  // Exact match on name (highest priority)
  if (resultNameLower === searchTermLower) {
    score += 1000;
  }
  // Starts with search term
  else if (resultNameLower.startsWith(searchTermLower)) {
    score += 500;
  }
  // Contains search term as whole phrase
  else if (resultNameLower.includes(searchTermLower)) {
    score += 250;
  }

  // Word-by-word matching
  searchWords.forEach((word) => {
    const wordRegex = new RegExp(`\\b${word}`, 'i');
    
    // Match in name
    if (wordRegex.test(result.name)) {
      score += 100;
    }
    
    // Match in searchable text (description, etc)
    if (wordRegex.test(result.searchableText)) {
      score += 25;
    }
  });

  // Category boost (pages are lower priority unless searching for them)
  if (result.category === 'Page') {
    score *= 0.8; // Slightly lower priority for pages
  }

  return score;
}

// Search the index with smart filtering and ranking
export function searchIndex(query) {
  if (!query || !query.trim()) {
    return [];
  }

  const index = buildSearchIndex();
  const searchTerm = query.trim();
  const searchWords = searchTerm
    .toLowerCase()
    .split(/\s+/)
    .filter(word => word.length > 0);

  // Filter results that match at least one word
  const matchedResults = index.filter((result) => {
    return searchWords.some(word => {
      const wordRegex = new RegExp(`\\b${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'i');
      return wordRegex.test(result.name) || wordRegex.test(result.searchableText);
    });
  });

  // Score and sort results
  const scoredResults = matchedResults.map((result) => ({
    ...result,
    relevanceScore: calculateRelevanceScore(result, searchTerm, searchWords),
  }));

  // Sort by relevance score, then by name
  return scoredResults
    .sort((a, b) => {
      if (b.relevanceScore !== a.relevanceScore) {
        return b.relevanceScore - a.relevanceScore;
      }
      return a.name.localeCompare(b.name);
    });
}

// Get results grouped by category
export function searchAndGroup(query) {
  const results = searchIndex(query);
  const grouped = {};

  results.forEach((result) => {
    const category = result.category;
    if (!grouped[category]) {
      grouped[category] = [];
    }
    grouped[category].push(result);
  });

  // Sort categories for display
  const categoryOrder = ['Page', 'Spell', 'Creature', 'Item', 'Feature', 'News', 'Gallery'];
  const sortedGrouped = {};

  categoryOrder.forEach((cat) => {
    if (grouped[cat]) {
      sortedGrouped[cat] = grouped[cat];
    }
  });

  // Add any remaining categories
  Object.keys(grouped).forEach((cat) => {
    if (!sortedGrouped[cat]) {
      sortedGrouped[cat] = grouped[cat];
    }
  });

  return sortedGrouped;
}

// Get suggested results (e.g., for empty state or quick access)
export function getSuggestedResults(limit = 10) {
  const index = buildSearchIndex();
  
  // Return a mix of pages and popular items
  const pages = index.filter(r => r.category === 'Page').slice(0, 5);
  const items = index
    .filter(r => r.category !== 'Page')
    .sort((a, b) => {
      // Prioritize by experience/rarity if available
      if (a.experience && b.experience) {
        return b.experience - a.experience;
      }
      return a.name.localeCompare(b.name);
    })
    .slice(0, limit - pages.length);

  return [...pages, ...items];
}

// Get trending searches (most viewed categories)
export function getTrendingCategories() {
  return ['Items', 'Spells', 'Creatures', 'Features', 'Quests'];
}
