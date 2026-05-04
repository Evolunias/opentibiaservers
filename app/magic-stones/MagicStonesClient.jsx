'use client';

import { useState, useMemo } from 'react';
import './magic-stones.css';

const magicStones = [
  {
    id: 'mana-regen',
    name: 'Mana Regeneration Stone',
    icon: '🔮',
    statBoost: '+1 Mana Regen per stone (Max +5)',
    description: 'Restore your magical essence more swiftly with this mystical stone.',
    howItWorks: 'Each Mana Regen Stone increases your mana regeneration by 1 point. You can apply up to 5 Mana Regen Stones for a total boost of +5 to your Mana Regen.',
    effect: 'Increases how quickly your mana regenerates over time, allowing you to recover mana faster and cast more spells without interruption. This is essential for spell-casting combat.',
    applicationInfo: 'Once you have collected 5 Mana Regen Stones of the same type, you can combine them and apply them to your armor permanently.',
    craftingRequirements: {
      'Iron Ore': 10,
      'Energy Soil': 10,
      'Fine Sulphur': 10,
      'Mother Soil': 10,
      'Iced Soil': 10,
      'Gold Nuggets': 50
    }
  },
  {
    id: 'hp-regen',
    name: 'Health Regeneration Stone',
    icon: '❤️',
    statBoost: '+1 HP Regen per stone (Max +5)',
    description: 'Enhance your body\'s natural healing with this vital stone.',
    howItWorks: 'Each HP Regen Stone increases your health regeneration by 1 point. You can apply up to 5 HP Regen Stones for a total boost of +5 to your HP Regen.',
    effect: 'Increases how quickly your health regenerates, helping you recover from damage faster during combat or while exploring dangerous areas. Perfect for prolonged encounters.',
    applicationInfo: 'Once you have collected 5 HP Regen Stones of the same type, you can combine them and apply them to your armor permanently.',
    craftingRequirements: {
      'Iron Ore': 10,
      'Energy Soil': 10,
      'Fine Sulphur': 10,
      'Mother Soil': 10,
      'Iced Soil': 10,
      'Gold Nuggets': 50
    }
  },
  {
    id: 'melee-fighting',
    name: 'Melee Fighting Stone',
    icon: '⚔️',
    statBoost: '+1 Melee Fighting per stone (Max +5)',
    description: 'Master the art of close combat with this formidable stone.',
    howItWorks: 'Each Melee Fight Stone increases your melee fighting skill by 1 point. You can apply up to 5 Melee Fight Stones for a total boost of +5 to your Melee Fight Level.',
    effect: 'Increases the damage and effectiveness of your melee attacks, making you stronger and more accurate in close combat. Essential for warriors and knights.',
    applicationInfo: 'Once you have collected 5 Melee Fight Stones of the same type, you can combine them and apply them to your armor permanently.',
    craftingRequirements: {
      'Iron Ore': 5,
      'Energy Soil': 5,
      'Fine Sulphur': 5,
      'Mother Soil': 5,
      'Iced Soil': 5,
      'Gold Nuggets': 50
    }
  },
  {
    id: 'distance-fighting',
    name: 'Distance Fighting Stone',
    icon: '🏹',
    statBoost: '+1 Distance Fighting per stone (Max +5)',
    description: 'Perfect your ranged combat with precision and power from afar.',
    howItWorks: 'Each Distance Fight Stone increases your distance fighting skill by 1 point. You can apply up to 5 Distance Fight Stones for a total boost of +5 to your Distance Fight Level.',
    effect: 'Increases the damage and effectiveness of your ranged attacks, improving your accuracy and damage when using bows, crossbows, or other ranged weapons.',
    applicationInfo: 'Once you have collected 5 Distance Fight Stones of the same type, you can combine them and apply them to your armor permanently.',
    craftingRequirements: {
      'Iron Ore': 5,
      'Energy Soil': 5,
      'Fine Sulphur': 5,
      'Mother Soil': 5,
      'Iced Soil': 5,
      'Gold Nuggets': 50
    }
  },
  {
    id: 'magic-level',
    name: 'Magic Level Stone',
    icon: '✨',
    statBoost: '+1 Magic Level per stone (Max +5)',
    description: 'Amplify your magical prowess with this arcane stone.',
    howItWorks: 'Each Magic Level Stone increases your magic skill by 1 point. You can apply up to 5 Magic Level Stones for a total boost of +5 to your Magic Level.',
    effect: 'Increases the damage and effectiveness of your spells, making your magical attacks more powerful and devastating in both PvE and competitive scenarios.',
    applicationInfo: 'Once you have collected 5 Magic Level Stones of the same type, you can combine them and apply them to your armor permanently.',
    craftingRequirements: {
      'Iron Ore': 5,
      'Energy Soil': 5,
      'Fine Sulphur': 5,
      'Mother Soil': 5,
      'Iced Soil': 5,
      'Gold Nuggets': 50
    }
  }
];

export default function MagicStonesClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedStone, setExpandedStone] = useState(null);

  const filteredStones = useMemo(() => {
    if (!searchQuery.trim()) return magicStones;
    
    const query = searchQuery.toLowerCase();
    return magicStones.filter(stone =>
      stone.name.toLowerCase().includes(query) ||
      stone.description.toLowerCase().includes(query) ||
      stone.howItWorks.toLowerCase().includes(query) ||
      stone.effect.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const toggleExpanded = (stoneId) => {
    setExpandedStone(expandedStone === stoneId ? null : stoneId);
  };

  return (
    <main className="page-shell magic-stones-page">
      <section className="magic-stones-hero">
        <h1>Magic Stones Guide</h1>
        <p className="hero-subtitle">
          Harness the power of enchanted stones to permanently enhance your armor and abilities
        </p>
      </section>

      <section className="magic-stones-intro">
        <div className="intro-content">
          <h2>What Are Magic Stones?</h2>
          <p>
            Magic Stones are special, transformative items that can be applied to your armor to enhance specific stats. These mystical artifacts represent the pinnacle of character customization, allowing you to tailor your abilities to match your preferred playstyle and combat approach.
          </p>
          <div className="intro-highlights">
            <div className="highlight-box">
              <span className="highlight-icon">⭐</span>
              <p><strong>Apply up to 5 stones</strong> of the same type to any armor piece</p>
            </div>
            <div className="highlight-box">
              <span className="highlight-icon">📈</span>
              <p>Each stone provides <strong>+1 boost</strong> to a specific stat</p>
            </div>
            <div className="highlight-box">
              <span className="highlight-icon">🔒</span>
              <p>Enhancements are <strong>permanent</strong> once applied to armor</p>
            </div>
            <div className="highlight-box">
              <span className="highlight-icon">🎯</span>
              <p><strong>Maximum boost</strong> of +5 per stat type</p>
            </div>
          </div>
        </div>
      </section>

      <section className="magic-stones-search">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search Magic Stones by name, effect, or crafting materials..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search magic stones"
          />
          <span className="search-icon">🔍</span>
          {searchQuery && (
            <button
              className="search-clear"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
        {filteredStones.length > 0 && (
          <p className="search-results-info">
            Found <strong>{filteredStones.length}</strong> Magic Stone{filteredStones.length !== 1 ? 's' : ''}
          </p>
        )}
      </section>

      <section className="magic-stones-grid">
        {filteredStones.length > 0 ? (
          filteredStones.map((stone) => (
            <article
              key={stone.id}
              className={`stone-card ${expandedStone === stone.id ? 'expanded' : ''}`}
            >
              <div
                className="stone-card-header"
                onClick={() => toggleExpanded(stone.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    toggleExpanded(stone.id);
                  }
                }}
              >
                <div className="stone-icon-section">
                  <span className="stone-icon">{stone.icon}</span>
                  <div className="stone-title-section">
                    <h3 className="stone-name">{stone.name}</h3>
                    <span className="stone-boost">{stone.statBoost}</span>
                  </div>
                </div>
                <span className="expand-toggle">
                  {expandedStone === stone.id ? '−' : '+'}
                </span>
              </div>

              <p className="stone-description">{stone.description}</p>

              {expandedStone === stone.id && (
                <div className="stone-details">
                  <div className="detail-section">
                    <h4>How It Works</h4>
                    <p>{stone.howItWorks}</p>
                  </div>

                  <div className="detail-section">
                    <h4>Effect</h4>
                    <p>{stone.effect}</p>
                  </div>

                  <div className="detail-section">
                    <h4>Application</h4>
                    <p>{stone.applicationInfo}</p>
                  </div>

                  <div className="detail-section crafting-section">
                    <h4>Crafting Requirements</h4>
                    <div className="crafting-materials">
                      {Object.entries(stone.craftingRequirements).map(([material, quantity]) => (
                        <div key={material} className="material-item">
                          <span className="material-name">{material}</span>
                          <span className="material-quantity">×{quantity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="stone-footer">
                <span className="expand-hint">
                  {expandedStone === stone.id ? 'Hide details' : 'Show details'}
                </span>
              </div>
            </article>
          ))
        ) : (
          <div className="no-results">
            <p>No Magic Stones found matching your search.</p>
            <button
              className="clear-search-btn"
              onClick={() => setSearchQuery('')}
            >
              Clear Search
            </button>
          </div>
        )}
      </section>

      <section className="crafting-guide-section">
        <h2>How to Craft Magic Stones</h2>
        <div className="crafting-guide-content">
          <p>
            To craft Magic Stones, you'll need to visit the <strong>Pickaxe Quest area</strong> where you'll find a specialized crafting machine. This powerful device will guide you through the crafting process and display all necessary materials required for your desired stone type.
          </p>
          <div className="crafting-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h4>Gather Materials</h4>
              <p>Collect the required resources through mining and other gathering activities. Most materials can be found in mining nodes throughout the world.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h4>Visit the Crafting Machine</h4>
              <p>Head to the Pickaxe Quest area and interact with the Magic Stone crafting machine to begin the crafting process.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h4>Select Your Stone Type</h4>
              <p>Choose which Magic Stone type you wish to craft based on the stats you want to enhance.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h4>Craft and Collect</h4>
              <p>Confirm your selection and craft your Magic Stone. You can craft as many stones as you have materials for.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="application-guide-section">
        <h2>How to Apply Magic Stones</h2>
        <div className="application-guide-content">
          <p>
            Applying Magic Stones to your armor is a strategic process that allows you to customize your equipment to your exact needs. Once applied, the enhancements become permanent, significantly boosting your chosen stats.
          </p>
          <div className="application-steps">
            <div className="app-step">
              <span className="step-icon">📦</span>
              <div>
                <h4>Collect Five Stones</h4>
                <p>Gather 5 Magic Stones of the same type. This requires dedication and resource management.</p>
              </div>
            </div>
            <div className="app-step">
              <span className="step-icon">🔄</span>
              <div>
                <h4>Combine Your Stones</h4>
                <p>Use the combination mechanic to merge all 5 stones together into a single powerful enhancement.</p>
              </div>
            </div>
            <div className="app-step">
              <span className="step-icon">🛡️</span>
              <div>
                <h4>Apply to Armor</h4>
                <p>Select your target armor piece and apply the combined stone enhancement to it.</p>
              </div>
            </div>
            <div className="app-step">
              <span className="step-icon">⚡</span>
              <div>
                <h4>Enjoy Your Boost</h4>
                <p>Your stat is permanently increased by the stone enhancement. You can now apply more stones to other stats!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="playstyle-optimization">
        <h2>Playstyle Optimization</h2>
        <p>
          Magic Stones empower you to refine your character according to your preferred playstyle. Whether you focus on magic, melee combat, ranged attacks, or a hybrid approach, there's a Magic Stone strategy perfect for you.
        </p>
        <div className="optimization-cards">
          <div className="optimization-card">
            <h4>🔮 Spellcaster Build</h4>
            <p>Prioritize Magic Level and Mana Regen to cast powerful spells with minimal downtime. Become an unstoppable force of magical destruction.</p>
          </div>
          <div className="optimization-card">
            <h4>⚔️ Melee Warrior</h4>
            <p>Boost Melee Fighting and Health Regen to dominate in close-range combat. Tank damage and strike with devastating force.</p>
          </div>
          <div className="optimization-card">
            <h4>🏹 Ranger Specialist</h4>
            <p>Enhance Distance Fighting and Health Regen for superior ranged combat. Strike from safety with precision and power.</p>
          </div>
          <div className="optimization-card">
            <h4>⚡ Hybrid Adventurer</h4>
            <p>Distribute stones across multiple stats to create a versatile character that excels in various combat scenarios.</p>
          </div>
        </div>
      </section>

      <section className="magic-stones-image-section">
        <h2>Magic Stones Reference</h2>
        <div className="image-container">
          <img
            src="/images/magic-stones.webp"
            alt="Magic Stones interface showing Mana Regeneration, Health Regeneration, Melee Fighting, Distance Fighting, and Magic Level stones"
            className="stones-reference-image"
            loading="lazy"
          />
          <p className="image-caption">
            The five primary Magic Stone types available in the game, each offering unique stat enhancements for your character progression.
          </p>
        </div>
      </section>

      <section className="quick-tips">
        <h2>Pro Tips</h2>
        <ul className="tips-list">
          <li><strong>Plan Your Build:</strong> Decide which stats are most important for your playstyle before investing materials.</li>
          <li><strong>Stock Resources:</strong> Mining is your primary source for crafting materials. Engage in regular mining runs to maintain a steady supply.</li>
          <li><strong>Upgrade Strategically:</strong> Consider your current equipment and future goals when deciding which stones to craft first.</li>
          <li><strong>Maximize Efficiency:</strong> Each stat can be enhanced by a maximum of +5, so prioritize the most impactful stones for your build.</li>
          <li><strong>Diversify Your Arsenal:</strong> Apply different stone types to different armor pieces for optimal versatility in combat.</li>
          <li><strong>Regular Updates:</strong> Game balance changes may affect the optimal Magic Stone strategy, so stay informed about patch notes.</li>
        </ul>
      </section>
    </main>
  );
}
