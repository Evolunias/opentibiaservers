// Client-side search utilities for loading and searching JSON data

let searchIndexCache = null;

// Fetch JSON data from public/data
async function fetchJSON(filename) {
  try {
    const response = await fetch(`/data/${filename}`);
    if (!response.ok) throw new Error(`Failed to fetch ${filename}`);
    return await response.json();
  } catch (error) {
    console.warn(`Failed to load ${filename}:`, error.message);
    return null;
  }
}

// Build search index from all data sources
export async function buildSearchIndex() {
  if (searchIndexCache) return searchIndexCache;

  const index = [];

  // Load Spells
  const spellsData = await fetchJSON('spells.json');
  if (spellsData && spellsData.spells && Array.isArray(spellsData.spells)) {
    spellsData.spells.forEach((spell) => {
      // Extract spell command from description (e.g., "utito tempo" from description)
      const spellCommand = (spell.description || '').split(' ').slice(0, 3).join(' ');

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
        searchableText: `${spell.name} ${spell.description || ''} ${(spell.vocations || []).join(' ')} ${spellCommand}`.toLowerCase(),
      });
    });
  }

  // Load Creatures
  const creaturesData = await fetchJSON('creatures.json');
  if (creaturesData && creaturesData.creatures && Array.isArray(creaturesData.creatures)) {
    creaturesData.creatures.forEach((creature) => {
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
        searchableText: `${creature.name} ${creature.description || ''} ${creature.location || ''} ${creature.rarity || ''} ${creature.type || ''}`.toLowerCase(),
      });
    });
  }

  // Load Items
  const itemsData = await fetchJSON('items.json');
  if (itemsData) {
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

    if (itemsData.equipment_slots) {
      Object.entries(itemsData.equipment_slots).forEach(([slotName, slotData]) => {
        if (slotData && slotData.items && Array.isArray(slotData.items)) {
          processItems(slotData.items, slotName);
        }
      });
    }

    if (itemsData.weapons && Array.isArray(itemsData.weapons)) {
      processItems(itemsData.weapons, 'Weapon');
    }
  }

  // Load News
  const newsData = await fetchJSON('news.json');
  if (newsData && newsData.news && Array.isArray(newsData.news)) {
    newsData.news.forEach((newsItem) => {
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
  const featuresData = await fetchJSON('features.json');
  if (featuresData && featuresData.features && Array.isArray(featuresData.features)) {
    featuresData.features.forEach((feature) => {
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
  const galleryData = await fetchJSON('gallery.json');
  if (galleryData && galleryData.galleries && Array.isArray(galleryData.galleries)) {
    galleryData.galleries.forEach((galleryGroup) => {
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

  // Load Bosses
  const bossImagesData = await fetchJSON('boss-images.json');
  if (bossImagesData && bossImagesData.bosses && Array.isArray(bossImagesData.bosses)) {
    const bossLootData = await fetchJSON('boss-loot.json');
    const bossLootMap = {};
    if (bossLootData && bossLootData.bosses && Array.isArray(bossLootData.bosses)) {
      bossLootData.bosses.forEach((boss) => {
        if (boss.name) {
          bossLootMap[boss.name.toLowerCase()] = boss;
        }
      });
    }

    bossImagesData.bosses.forEach((boss) => {
      const bossName = boss.name || '';
      const bossLootInfo = bossLootMap[bossName.toLowerCase()];
      const lootNames = (bossLootInfo?.common || []).concat(bossLootInfo?.uncommon || []).slice(0, 10).join(' ');

      index.push({
        id: `boss-${bossName.replace(/\s+/g, '-').toLowerCase()}`,
        name: bossName,
        category: 'Boss',
        description: bossLootInfo?.description || `Boss encounter with valuable loot`,
        loot: bossLootInfo?.loot || [],
        href: '/bosses',
        searchableText: `${bossName} boss encounter ${bossLootInfo?.description || ''} ${lootNames}`.toLowerCase(),
      });
    });
  }

  // Load Cosmetics
  const cosmeticsIndex = [
    { name: 'Citizen', type: 'Outfit', obtained: 'Semna Npc', required: 'Obtained from Addon doll' },
    { name: 'Hunter', type: 'Outfit', obtained: 'Sabry Npc', required: 'Obtained from Addon doll' },
    { name: 'Mage', type: 'Outfit', obtained: 'Drakonix Npc', required: 'Ferumbras hat from Ferumbras raid, traded with NPC in Lizard Chosen spawn' },
    { name: 'Knight', type: 'Outfit', obtained: 'Cosmetics Npc', required: '15x Gold Nuggets, 10x Star Coins, 2x Cluster of Solaces, 2x Huge Chunk of Crude Irons' },
    { name: 'Noble', type: 'Outfit', obtained: 'Cosmetics Npc', required: '30x Gold Nuggets' },
    { name: 'Summoner', type: 'Outfit', obtained: 'Salem Npc', required: 'Obtained from Addon doll' },
    { name: 'Warrior', type: 'Outfit', obtained: 'Cosmetics Npc', required: '200x Gold Nuggets, 100x Star Coins, 6x Cluster of Solaces, 1x Dragon Claw' },
    { name: 'Barbarian', type: 'Outfit', obtained: 'Cosmetics Npc', required: '200x Gold Nuggets, 100x Star Coins, 6x Cluster of Solaces, 1x Ruthless Axe' },
    { name: 'Druid', type: 'Outfit', obtained: 'Cosmetics Npc', required: '40x Gold Nuggets, 30x Star Coins, 3x Cluster of Solaces, 1x Wolf Tooth Chain' },
    { name: 'Wizard', type: 'Outfit', obtained: 'Cosmetics Npc', required: '70x Gold Nuggets, 50x Star Coins, 3x Cluster of Solaces, 50x Holy Orchid' },
    { name: 'Oriental', type: 'Outfit', obtained: 'Cosmetics Npc', required: '150x Gold Nuggets, 80x Star Coins, 5x Cluster of Solaces, 1x Coral Comb' },
    { name: 'Pirate', type: 'Outfit', obtained: 'Cosmetics Npc', required: '100x Gold Nuggets, 60x Star Coins, 3x Cluster of Solaces, 1x Sabre' },
    { name: 'Assassin', type: 'Outfit', obtained: 'Cosmetics Npc', required: '200x Gold Nuggets, 100x Star Coins, 3x Cluster of Solaces, 400x Fish' },
    { name: 'Beggar', type: 'Outfit', obtained: 'Cosmetics Npc', required: '35x Gold Nuggets, 20x Star Coins, 2x Cluster of Solaces, 20x Ape Fur' },
    { name: 'Shaman', type: 'Outfit', obtained: 'Cosmetics Npc', required: '100x Gold Nuggets, 50x Star Coins, 4x Cluster of Solaces, 1x Mandrakes' },
    { name: 'Norse', type: 'Outfit', obtained: 'Cosmetics Npc', required: '80x Gold Nuggets, 40x Star Coins, 3x Cluster of Solaces, 200x Shards' },
    { name: 'Nightmare', type: 'Outfit', obtained: 'Cosmetics Npc', required: '200x Gold Nuggets, 100x Star Coins, 6x Cluster of Solaces, 500x Demonic Essences' },
    { name: 'Jester', type: 'Outfit', obtained: 'Cosmetics Npc', required: '50x Gold Nuggets, 30x Star Coins, 3x Cluster of Solaces, 1x Jester Doll (rare)' },
    { name: 'Brotherhood', type: 'Outfit', obtained: 'Cosmetics Npc', required: '350x Gold Nuggets, 100x Star Coins, 10x Cluster of Solaces, 5x Spying Eye' },
    { name: 'Demonhunter', type: 'Outfit', obtained: 'Cosmetics Npc', required: '350x Gold Nuggets, 100x Star Coins, 10x Cluster of Solaces, 200x Vampire Dust' },
    { name: 'Ember Wings', type: 'Wings', obtained: 'Store and Wings Doll' },
    { name: 'Space Wings', type: 'Wings', obtained: 'Store and Wings Doll' },
    { name: 'Demonic Skull Wings', type: 'Wings', obtained: 'Store and Wings Doll' },
    { name: 'Spotted Wings', type: 'Wings', obtained: 'Store and Wings Doll' },
    { name: 'Fires Embrace Wings', type: 'Wings', obtained: 'Store and Wings Doll' },
    { name: 'Smokey Clouds Wings', type: 'Wings', obtained: 'Store and Wings Doll' },
    { name: 'Skeletal Wings', type: 'Wings', obtained: 'Store and Wings Doll' },
    { name: 'Archangel Wings', type: 'Wings', obtained: 'Store and Wings Doll' },
    { name: 'Shadow Hands Wings', type: 'Wings', obtained: 'Store and Wings Doll' },
    { name: 'Boned Dragon Wings', type: 'Wings', obtained: 'Store and Wings Doll' },
    { name: 'Feathered Wings', type: 'Wings', obtained: 'Store and Wings Doll' },
    { name: 'Charged Wings', type: 'Wings', obtained: 'Store and Wings Doll' },
    { name: 'Feather Tipped Fairy Wings', type: 'Wings', obtained: 'Store and Wings Doll' },
    { name: 'Blood Horns Wings', type: 'Wings', obtained: 'Store and Wings Doll' },
    { name: 'Enchanted Twig Wings', type: 'Wings', obtained: 'Store and Wings Doll' },
    { name: 'Hellcore Wings', type: 'Wings', obtained: 'Store and Wings Doll' },
    { name: 'Ancient Wings', type: 'Wings', obtained: 'Store and Wings Doll' },
    { name: 'Magma Wings', type: 'Wings', obtained: 'Store and Wings Doll' },
    { name: 'Butterfly Wings', type: 'Wings', obtained: 'Store and Wings Doll' },
    { name: 'Angel Wings', type: 'Wings', obtained: 'Sara Npc' },
    { name: 'Golden Wings', type: 'Wings', obtained: 'Store and Wings Doll' },
    { name: 'Blood Circle', type: 'Aura', obtained: 'Store and Auras Doll' },
    { name: 'Shadow Minions', type: 'Aura', obtained: 'Store and Auras Doll' },
    { name: 'Rising Blood Skulls', type: 'Aura', obtained: 'Store and Auras Doll' },
    { name: 'Blood Pool', type: 'Aura', obtained: 'Store and Auras Doll' },
    { name: 'Fierce Aura', type: 'Aura', obtained: 'Store and Auras Doll' },
    { name: 'Water Droplets', type: 'Aura', obtained: 'Store and Auras Doll' },
    { name: 'Death Ring', type: 'Aura', obtained: 'Store and Auras Doll' },
    { name: 'Energy Aura', type: 'Aura', obtained: 'Store and Auras Doll' },
    { name: 'Evil Aura', type: 'Aura', obtained: 'Store and Auras Doll' },
    { name: 'Angel\'s Crown Aura', type: 'Aura', obtained: 'Store and Auras Doll' },
    { name: 'Fierce Stars Aura', type: 'Aura', obtained: 'Store and Auras Doll' },
    { name: 'Fire Circle', type: 'Aura', obtained: 'Store and Auras Doll' },
    { name: 'Orbs Circle', type: 'Aura', obtained: 'Store and Auras Doll' },
    { name: 'Spiritual Energy', type: 'Aura', obtained: 'Store and Auras Doll' },
    { name: 'Blue Aurora', type: 'Aura', obtained: 'Store and Auras Doll' },
    { name: 'Blue Orbs', type: 'Aura', obtained: 'Store and Auras Doll' },
    { name: 'Obliterating Aura', type: 'Aura', obtained: 'Store and Auras Doll' },
    { name: 'Fire Bender', type: 'Aura', obtained: 'Store and Auras Doll' },
    { name: 'Sacred Aura', type: 'Aura', obtained: 'Store and Auras Doll' },
    { name: 'Soulfire Aura', type: 'Aura', obtained: 'Store and Auras Doll' },
    { name: 'Green Crystal Aura', type: 'Aura', obtained: 'Saif Npc' },
    { name: 'Spectre', type: 'Bird', obtained: 'Store and Birds Doll' },
    { name: 'Esabon', type: 'Bird', obtained: 'Store and Birds Doll' },
    { name: 'Green Bat', type: 'Bird', obtained: 'Store and Birds Doll' },
    { name: 'Ynremr', type: 'Bird', obtained: 'Store and Birds Doll' },
    { name: 'Bast', type: 'Bird', obtained: 'Store and Birds Doll' },
    { name: 'Lorenna', type: 'Bird', obtained: 'Store and Birds Doll' },
    { name: 'Iatosr', type: 'Bird', obtained: 'Store and Birds Doll' },
    { name: 'Flamebringer', type: 'Bird', obtained: 'Store and Birds Doll' },
    { name: 'Magmortar', type: 'Bird', obtained: 'Store and Birds Doll' },
  ];

  cosmeticsIndex.forEach((cosmetic) => {
    index.push({
      id: `cosmetic-${cosmetic.name?.replace(/\s+/g, '-').toLowerCase()}`,
      name: cosmetic.name || '',
      category: 'Cosmetic',
      type: cosmetic.type || '',
      obtained: cosmetic.obtained || '',
      required: cosmetic.required || '',
      description: `A ${cosmetic.type} cosmetic that can be obtained from ${cosmetic.obtained}`,
      href: '/cosmetics',
      searchableText: `${cosmetic.name} ${cosmetic.type} ${cosmetic.obtained} ${cosmetic.required || ''} cosmetic outfit wings aura bird`.toLowerCase(),
    });
  });

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
    { name: 'Cosmetics & Outfits', category: 'Page', href: '/cosmetics' },
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

// Calculate relevance score
function calculateRelevanceScore(result, searchTerm, searchWords) {
  let score = 0;
  const resultNameLower = result.name.toLowerCase();
  const searchTermLower = searchTerm.toLowerCase();
  const searchableTextLower = result.searchableText;

  // Exact name match (highest priority)
  if (resultNameLower === searchTermLower) {
    score += 1000;
  }
  // Prefix match on name
  else if (resultNameLower.startsWith(searchTermLower)) {
    score += 500;
  }
  // Substring match on name
  else if (resultNameLower.includes(searchTermLower)) {
    score += 250;
  }

  // Score individual search words with higher weights for matches in different parts
  searchWords.forEach((word) => {
    const wordLower = word.toLowerCase();

    // Name matches (highest)
    if (resultNameLower === wordLower) {
      score += 100;
    } else if (resultNameLower.startsWith(wordLower)) {
      score += 80;
    } else if (resultNameLower.includes(wordLower)) {
      score += 50;
    }

    // Searchable text matches (includes description, vocations, etc.)
    if (searchableTextLower.includes(wordLower)) {
      score += 40;
    }
  });

  // Category-specific boosts
  if (result.category === 'Boss') {
    score *= 1.15;
  } else if (result.category === 'Spell') {
    score *= 1.1;
  } else if (result.category === 'Cosmetic') {
    score *= 1.12;
  } else if (result.category === 'Page') {
    score *= 0.7;
  }

  return score;
}

// Search with filtering and ranking
export async function searchIndex(query) {
  if (!query || !query.trim()) {
    return [];
  }

  const index = await buildSearchIndex();
  const searchTerm = query.trim();
  const searchWords = searchTerm
    .toLowerCase()
    .split(/\s+/)
    .filter(word => word.length > 0);

  // Match results using substring/prefix matching instead of word boundaries
  const matchedResults = index.filter((result) => {
    const resultNameLower = result.name.toLowerCase();
    const searchableTextLower = result.searchableText;

    // Check if any search word matches as substring or prefix
    return searchWords.some(word => {
      // Exact match or substring match
      return resultNameLower.includes(word) || searchableTextLower.includes(word);
    });
  });

  const scoredResults = matchedResults.map((result) => ({
    ...result,
    relevanceScore: calculateRelevanceScore(result, searchTerm, searchWords),
  }));

  return scoredResults
    .sort((a, b) => {
      if (b.relevanceScore !== a.relevanceScore) {
        return b.relevanceScore - a.relevanceScore;
      }
      return a.name.localeCompare(b.name);
    });
}

// Get results grouped by category
export async function searchAndGroup(query) {
  const results = await searchIndex(query);
  const grouped = {};

  results.forEach((result) => {
    const category = result.category;
    if (!grouped[category]) {
      grouped[category] = [];
    }
    grouped[category].push(result);
  });

  const categoryOrder = ['Page', 'Boss', 'Spell', 'Creature', 'Item', 'Cosmetic', 'Feature', 'News', 'Gallery'];
  const sortedGrouped = {};

  categoryOrder.forEach((cat) => {
    if (grouped[cat]) {
      sortedGrouped[cat] = grouped[cat];
    }
  });

  Object.keys(grouped).forEach((cat) => {
    if (!sortedGrouped[cat]) {
      sortedGrouped[cat] = grouped[cat];
    }
  });

  return sortedGrouped;
}

// Get suggested results
export async function getSuggestedResults(limit = 10) {
  const index = await buildSearchIndex();
  
  const pages = index.filter(r => r.category === 'Page').slice(0, 5);
  const items = index
    .filter(r => r.category !== 'Page')
    .sort((a, b) => {
      if (a.experience && b.experience) {
        return b.experience - a.experience;
      }
      return a.name.localeCompare(b.name);
    })
    .slice(0, limit - pages.length);

  return [...pages, ...items];
}
