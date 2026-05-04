'use client';

import { useState, useMemo } from 'react';
import './fishing.css';

const fishingRods = [
  {
    id: 'fishing-rod',
    name: 'Fishing Rod',
    icon: '🎣',
    skillRequired: '10-50 Fishing Skill',
    fishAvailable: ['Green Perch'],
    description: 'Your first fishing rod for beginners just starting their fishing journey.',
  },
  {
    id: 'great-rod',
    name: 'Great Rod',
    icon: '🎣',
    skillRequired: '50+ Fishing Skill',
    fishAvailable: ['Green Perch', 'Northern Pike'],
    description: 'An upgraded rod that opens access to more diverse fish species.',
  },
  {
    id: 'super-rod',
    name: 'Super Rod',
    icon: '🎣',
    skillRequired: '50+ Fishing Skill',
    fishAvailable: ['Green Perch', 'Northern Pike', 'Rainbow Trout', 'Wanda Fish'],
    description: 'The ultimate fishing rod for experienced anglers seeking the rarest catches.',
  },
];

const fishPerks = [
  {
    id: 'green-perch',
    name: 'Green Perch',
    icon: '🐟',
    attributes: [
      'Mana and Health points regeneration',
      'Instant Mana recovery per fish eaten',
    ],
    rarity: 'Common',
  },
  {
    id: 'northern-pike',
    name: 'Northern Pike',
    icon: '🐟',
    attributes: [
      '+5 Distance Skill for 1 hour',
      '+5 Melee Skill for 1 hour',
      '+5 Magic Levels for 1 hour',
      '500 HP for EK',
      '500 MP for Mage',
      '300 HP/MP for RP',
    ],
    rarity: 'Uncommon',
  },
  {
    id: 'rainbow-trout',
    name: 'Rainbow Trout',
    icon: '🐟',
    attributes: [
      '+10 Distance Skill for 1 hour',
      '+10 Melee Skill for 1 hour',
      '+10 Magic Levels for 1 hour',
      '1000 HP for EK',
      '1000 MP for Mage',
      '600 MP/HP for RP',
    ],
    rarity: 'Rare',
  },
  {
    id: 'wanda-fish',
    name: 'Wanda Fish',
    icon: '🐟',
    attributes: [
      '10% Attack Speed for 1 hour',
      '5% Damage Reduction for 1 hour',
      '5% Damage Increase for 1 hour',
      '1000 HP/1000 MP per second for 1 hour',
    ],
    rarity: 'Legendary',
  },
];

export default function FishingClient() {
  const [selectedFish, setSelectedFish] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFish = useMemo(() => {
    if (!searchQuery.trim()) return fishPerks;

    const query = searchQuery.toLowerCase();
    return fishPerks.filter(fish =>
      fish.name.toLowerCase().includes(query) ||
      fish.rarity.toLowerCase().includes(query) ||
      fish.attributes.some(attr => attr.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  const openFishModal = (fish) => {
    setSelectedFish(fish);
  };

  const closeFishModal = () => {
    setSelectedFish(null);
  };

  return (
    <main className="page-shell fishing-page">
      <section className="fishing-hero">
        <h1>Fishing Guide</h1>
        <p className="hero-subtitle">
          Master the art of fishing and discover the most valuable catches in Evolisca
        </p>
      </section>

      <section className="fishing-intro">
        <div className="intro-content">
          <h2>Welcome to Fishing</h2>
          <p>
            Fishing is a rewarding and relaxing activity that allows you to gather valuable resources and powerful consumables. Whether you're a novice angler or an experienced fisher, there's always something new to discover in Evolisca's waters. Start your fishing journey and unlock the secrets of powerful fish that grant incredible temporary stat boosts and regenerative benefits.
          </p>
          <div className="intro-highlights">
            <div className="highlight-box">
              <span className="highlight-icon">🎣</span>
              <p><strong>Three fishing rods</strong> with increasing power and requirements</p>
            </div>
            <div className="highlight-box">
              <span className="highlight-icon">🐟</span>
              <p><strong>Four distinct fish types</strong> each with unique benefits</p>
            </div>
            <div className="highlight-box">
              <span className="highlight-icon">⚡</span>
              <p>Fish provide <strong>temporary stat buffs</strong> and healing effects</p>
            </div>
            <div className="highlight-box">
              <span className="highlight-icon">⏱️</span>
              <p>Built-in <strong>exhaust system</strong> to prevent lag and crashes</p>
            </div>
          </div>
        </div>
      </section>

      <section className="npc-location-section">
        <h2>Finding the Fishing NPC</h2>
        <div className="npc-location-content">
          <div className="npc-text">
            <p>
              To begin your fishing adventure, head slightly <strong>north and west of the Temple</strong>. There you'll find <strong>Alissa</strong>, your friendly fishing expert who will equip you with your first fishing rod and guide you through the basics.
            </p>
            <div className="location-steps">
              <div className="location-step">
                <span className="step-number">1</span>
                <p><strong>Start at the Temple</strong> - This is your reference point</p>
              </div>
              <div className="location-step">
                <span className="step-number">2</span>
                <p><strong>Head North and West</strong> - Navigate away from the temple center</p>
              </div>
              <div className="location-step">
                <span className="step-number">3</span>
                <p><strong>Find Alissa</strong> - She's waiting to help you begin</p>
              </div>
            </div>
          </div>
          <div className="npc-image-container">
            <img
              src="/images/downloaded/builder-adc86dce-f0463457.webp"
              alt="Map showing location of Alissa, the Fishing NPC, north and west of the Temple"
              className="npc-location-image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="alissa-section">
        <h2>Meet Alissa</h2>
        <div className="alissa-content">
          <div className="alissa-image-container">
            <img
              src="/images/downloaded/builder-577e4d06-181ba4f6.webp"
              alt="Alissa, the Fishing NPC vendor with her trading interface"
              className="alissa-image"
              loading="lazy"
            />
          </div>
          <div className="alissa-text">
            <h3>Your Fishing Mentor</h3>
            <p>
              Alissa is a renowned fishing expert who has spent years perfecting her craft on Evolisca's waters. She's dedicated to helping new anglers get started with everything they need. When you visit her, she'll offer you your first fishing rod and provide valuable advice on where to fish and what to expect.
            </p>
            <div className="alissa-trades">
              <h4>Alissa's Fishing Rod Trades</h4>
              <div className="trade-items">
                <div className="trade-item">
                  <span className="item-icon">🎣</span>
                  <div className="item-details">
                    <p className="item-name">Fishing Rod</p>
                    <p className="item-price">150,000 Gold</p>
                  </div>
                </div>
                <div className="trade-item">
                  <span className="item-icon">🎣</span>
                  <div className="item-details">
                    <p className="item-name">Great Rod</p>
                    <p className="item-price">250,000 Gold</p>
                  </div>
                </div>
                <div className="trade-item">
                  <span className="item-icon">🎣</span>
                  <div className="item-details">
                    <p className="item-name">Super Rod</p>
                    <p className="item-price">500,000 Gold</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fishing-rods-section">
        <h2>Fishing Rods</h2>
        <p className="section-subtitle">
          Each rod unlocks access to different fish species as your skill level increases
        </p>
        <div className="fishing-rods-grid">
          {fishingRods.map((rod) => (
            <article key={rod.id} className="rod-card">
              <div className="rod-card-header">
                <div className="rod-info">
                  <span className="rod-icon">{rod.icon}</span>
                  <div className="rod-details">
                    <h3 className="rod-name">{rod.name}</h3>
                    <span className="rod-skill">{rod.skillRequired}</span>
                  </div>
                </div>
              </div>

              <p className="rod-description">{rod.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="fishing-rods-table-section">
        <h2>Fishing Progression Chart</h2>
        <div className="table-container">
          <img
            src="/images/downloaded/builder-f983a6fd-c1881681.webp"
            alt="Fishing progression chart showing fishing rods, skill requirements, and available fish"
            className="progression-chart"
            loading="lazy"
          />
          <p className="chart-caption">
            This chart displays all available fishing rods, their skill requirements, and the fish you can catch with each rod.
          </p>
        </div>
      </section>

      <section className="fish-search">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search fish by name, rarity, or benefits..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search fish"
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
        {filteredFish.length > 0 && (
          <p className="search-results-info">
            Found <strong>{filteredFish.length}</strong> fish type{filteredFish.length !== 1 ? 's' : ''}
          </p>
        )}
      </section>

      <section className="fish-perks-section">
        <h2>Fish & Their Benefits</h2>
        <p className="section-subtitle">
          Discover the unique benefits each fish provides when consumed
        </p>
        <div className="fish-perks-grid">
          {filteredFish.length > 0 ? (
            filteredFish.map((fish) => (
              <article key={fish.id} className="fish-card">
                <div className="fish-card-header">
                  <div className="fish-title-section">
                    <span className="fish-icon">{fish.icon}</span>
                    <div>
                      <h3 className="fish-name">{fish.name}</h3>
                      <span className={`fish-rarity rarity-${fish.rarity.toLowerCase()}`}>
                        {fish.rarity}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="fish-footer">
                  <button
                    className="show-benefits-btn"
                    onClick={() => openFishModal(fish)}
                  >
                    Show Benefits
                  </button>
                </div>
              </article>
            ))
          ) : (
            <div className="no-results">
              <p>No fish found matching your search.</p>
              <button
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="fish-perks-table-section">
        <h2>Fish Benefits Reference</h2>
        <div className="table-container">
          <img
            src="/images/downloaded/builder-5fdf4239-b14f578c.webp"
            alt="Detailed fish perks table showing attributes and benefits of each fish type"
            className="perks-chart"
            loading="lazy"
          />
          <p className="chart-caption">
            Complete reference table showing all fish types and their comprehensive attribute benefits.
          </p>
        </div>
      </section>

      <section className="npc-trade-section">
        <h2>Alissa's Trade Interface</h2>
        <div className="trade-image-container">
          <img
            src="/images/downloaded/builder-7fca0867-8cace5e8.webp"
            alt="Alissa's NPC trade interface showing fishing rod transactions and pricing"
            className="trade-interface-image"
            loading="lazy"
          />
          <p className="image-caption">
            Alissa's trading interface allows you to buy and sell fishing rods and other fishing-related items.
          </p>
        </div>
      </section>

      <section className="fishing-progression-guide">
        <h2>Your Fishing Journey</h2>
        <div className="progression-steps">
          <div className="progression-step">
            <div className="step-marker">1</div>
            <h4>Get Your First Rod</h4>
            <p>
              Visit Alissa and purchase your first Fishing Rod with 150,000 Gold. This is your entry point into the world of fishing.
            </p>
          </div>
          <div className="progression-step">
            <div className="step-marker">2</div>
            <h4>Build Your Skill</h4>
            <p>
              Start fishing and catch Green Perch to build your Fishing Skill from 0 to 50. This foundation opens doors to better fish.
            </p>
          </div>
          <div className="progression-step">
            <div className="step-marker">3</div>
            <h4>Upgrade Your Equipment</h4>
            <p>
              Once you reach Fishing Skill 50+, upgrade to the Great Rod or Super Rod to access more valuable and powerful fish species.
            </p>
          </div>
          <div className="progression-step">
            <div className="step-marker">4</div>
            <h4>Master the Waters</h4>
            <p>
              Unlock access to Rainbow Trout and Wanda Fish, the most powerful catches. Use these for significant stat boosts and buffs.
            </p>
          </div>
        </div>
      </section>

      <section className="exhaust-system-section">
        <h2>Fishing Exhaust System</h2>
        <div className="exhaust-content">
          <div className="exhaust-info">
            <h3>Understanding the Exhaust Mechanic</h3>
            <p>
              Fishing now includes an exhaust system to maintain server stability and prevent lag spikes. This system applies a cooldown to protect the gaming experience for all players.
            </p>
            <div className="exhaust-details">
              <div className="exhaust-rule">
                <span className="rule-icon">📊</span>
                <div>
                  <h4>Exhaust Threshold</h4>
                  <p>After fishing <strong>500 times</strong>, you trigger a 15-minute exhaust cooldown.</p>
                </div>
              </div>
              <div className="exhaust-rule">
                <span className="rule-icon">⏱️</span>
                <div>
                  <h4>Cooldown Duration</h4>
                  <p>The exhaust lasts for <strong>15 minutes</strong>, during which you cannot fish.</p>
                </div>
              </div>
              <div className="exhaust-rule">
                <span className="rule-icon">🛡️</span>
                <div>
                  <h4>Purpose</h4>
                  <p>This system is designed to <strong>combat lag spikes and crashes</strong>, ensuring a smooth experience for everyone.</p>
                </div>
              </div>
              <div className="exhaust-rule">
                <span className="rule-icon">✅</span>
                <div>
                  <h4>Planning</h4>
                  <p>Plan your fishing sessions strategically to work around the exhaust timer and maximize efficiency.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fishing-tips">
        <h2>Fishing Tips & Strategies</h2>
        <ul className="tips-list">
          <li><strong>Start Early:</strong> Get your first Fishing Rod as soon as possible to begin leveling your skill.</li>
          <li><strong>Patience Pays Off:</strong> Fishing is a relaxing activity. Enjoy the process while your skills grow naturally.</li>
          <li><strong>Optimize Your Catches:</strong> Use Green Perch for sustainable mana and health recovery during long sessions.</li>
          <li><strong>Save Powerful Fish:</strong> Store Rainbow Trout and Wanda Fish for challenging encounters where their stat buffs are crucial.</li>
          <li><strong>Plan Around Exhaust:</strong> Keep track of your fishing count to avoid getting exhausted at inopportune times.</li>
          <li><strong>Upgrade Strategically:</strong> Reach Fishing Skill 50 before investing in Great or Super Rods for maximum efficiency.</li>
          <li><strong>Farm Resources:</strong> Use fishing downtime to gather other materials or engage in different activities.</li>
          <li><strong>Community Events:</strong> Participate in fishing competitions or events for exclusive rewards.</li>
        </ul>
      </section>

      {selectedFish && (
        <div className="fish-modal-overlay" onClick={closeFishModal}>
          <div className="fish-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeFishModal}>✕</button>

            <div className="modal-header">
              <span className="modal-fish-icon">{selectedFish.icon}</span>
              <div className="modal-title-section">
                <h2>{selectedFish.name}</h2>
                <span className={`modal-rarity rarity-${selectedFish.rarity.toLowerCase()}`}>
                  {selectedFish.rarity}
                </span>
              </div>
            </div>

            <div className="modal-content">
              <h3>Benefits</h3>
              <ul className="modal-benefits-list">
                {selectedFish.attributes.map((attr, idx) => (
                  <li key={idx}>{attr}</li>
                ))}
              </ul>
            </div>

            <div className="modal-footer">
              <button className="modal-action-btn" onClick={closeFishModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
