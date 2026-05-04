'use client';

import { useState } from 'react';
import { X, Trophy, Zap, Target, MapPin, Sword, Users, Crown } from 'lucide-react';
import './achievements.css';

const achievementCategories = [
  {
    id: 'exploration',
    name: 'Exploration',
    icon: MapPin,
    achievements: [
      {
        id: 'explorer-1',
        name: 'First Steps',
        description: 'Discover your first location in Evolisca.',
        talentPoints: 25,
        goldNuggets: 50,
        starCoins: 10,
        experiencePoints: 1000,
        unlocked: true,
        progress: 100,
        type: 'exploration'
      },
      {
        id: 'explorer-2',
        name: 'World Explorer',
        description: 'Discover 10 different locations across Evolisca.',
        talentPoints: 100,
        goldNuggets: 500,
        starCoins: 50,
        experiencePoints: 50000,
        unlocked: true,
        progress: 100,
        type: 'exploration'
      },
      {
        id: 'explorer-3',
        name: 'Master Cartographer',
        description: 'Discover all hidden locations in Evolisca.',
        talentPoints: 250,
        goldNuggets: 2000,
        starCoins: 150,
        experiencePoints: 500000,
        unlocked: false,
        progress: 65,
        type: 'exploration'
      },
      {
        id: 'explorer-4',
        name: 'Secret Seeker',
        description: 'Find 5 secret areas hidden across the realm.',
        talentPoints: 150,
        goldNuggets: 1500,
        starCoins: 100,
        experiencePoints: 250000,
        unlocked: false,
        progress: 40,
        type: 'exploration'
      }
    ]
  },
  {
    id: 'combat',
    name: 'Combat & Monsters',
    icon: Sword,
    achievements: [
      {
        id: 'combat-1',
        name: 'Monster Slayer',
        description: 'Defeat 100 creatures in combat.',
        talentPoints: 50,
        goldNuggets: 250,
        starCoins: 25,
        experiencePoints: 10000,
        unlocked: true,
        progress: 100,
        type: 'combat'
      },
      {
        id: 'combat-2',
        name: 'Creature Collector',
        description: 'Defeat 1,000 different creatures.',
        talentPoints: 200,
        goldNuggets: 5000,
        starCoins: 300,
        experiencePoints: 500000,
        unlocked: false,
        progress: 45,
        type: 'combat'
      },
      {
        id: 'combat-3',
        name: 'Specimen Exterminator',
        description: 'Defeat 500 of the same creature type.',
        talentPoints: 300,
        goldNuggets: 10000,
        starCoins: 500,
        experiencePoints: 1000000,
        unlocked: false,
        progress: 80,
        type: 'combat'
      },
      {
        id: 'combat-4',
        name: 'Boss Slayer',
        description: 'Defeat 25 unique bosses.',
        talentPoints: 400,
        goldNuggets: 15000,
        starCoins: 750,
        experiencePoints: 2000000,
        unlocked: false,
        progress: 32,
        type: 'combat'
      }
    ]
  },
  {
    id: 'quests',
    name: 'Quests & Missions',
    icon: Target,
    achievements: [
      {
        id: 'quest-1',
        name: 'Quest Starter',
        description: 'Complete your first quest.',
        talentPoints: 30,
        goldNuggets: 100,
        starCoins: 20,
        experiencePoints: 5000,
        unlocked: true,
        progress: 100,
        type: 'quests'
      },
      {
        id: 'quest-2',
        name: 'Quest Master',
        description: 'Complete 50 quests in total.',
        talentPoints: 200,
        goldNuggets: 3000,
        starCoins: 200,
        experiencePoints: 300000,
        unlocked: false,
        progress: 36,
        type: 'quests'
      },
      {
        id: 'quest-3',
        name: 'Legendary Quester',
        description: 'Complete 200 quests without declining.',
        talentPoints: 500,
        goldNuggets: 15000,
        starCoins: 1000,
        experiencePoints: 2000000,
        unlocked: false,
        progress: 18,
        type: 'quests'
      },
      {
        id: 'quest-4',
        name: 'Task Completer',
        description: 'Complete all progression tasks.',
        talentPoints: 250,
        goldNuggets: 5000,
        starCoins: 300,
        experiencePoints: 750000,
        unlocked: false,
        progress: 75,
        type: 'quests'
      }
    ]
  },
  {
    id: 'events',
    name: 'Events & Tournaments',
    icon: Crown,
    achievements: [
      {
        id: 'event-1',
        name: 'Event Participant',
        description: 'Participate in your first event.',
        talentPoints: 50,
        goldNuggets: 200,
        starCoins: 50,
        experiencePoints: 25000,
        unlocked: true,
        progress: 100,
        type: 'events'
      },
      {
        id: 'event-2',
        name: 'Tournament Champion',
        description: 'Win 10 tournament matches.',
        talentPoints: 300,
        goldNuggets: 8000,
        starCoins: 400,
        experiencePoints: 1000000,
        unlocked: false,
        progress: 60,
        type: 'events'
      },
      {
        id: 'event-3',
        name: 'Seasonal Victor',
        description: 'Win a seasonal event competition.',
        talentPoints: 400,
        goldNuggets: 12000,
        starCoins: 600,
        experiencePoints: 1500000,
        unlocked: false,
        progress: 0,
        type: 'events'
      },
      {
        id: 'event-4',
        name: 'Event Legend',
        description: 'Participate in 50 different events.',
        talentPoints: 350,
        goldNuggets: 10000,
        starCoins: 500,
        experiencePoints: 1200000,
        unlocked: false,
        progress: 28,
        type: 'events'
      }
    ]
  },
  {
    id: 'progression',
    name: 'Character Progression',
    icon: Zap,
    achievements: [
      {
        id: 'prog-1',
        name: 'Level Up!',
        description: 'Reach level 100.',
        talentPoints: 75,
        goldNuggets: 1000,
        starCoins: 100,
        experiencePoints: 100000,
        unlocked: true,
        progress: 100,
        type: 'progression'
      },
      {
        id: 'prog-2',
        name: 'Promoted',
        description: 'Complete your first promotion quest.',
        talentPoints: 150,
        goldNuggets: 2000,
        starCoins: 150,
        experiencePoints: 200000,
        unlocked: true,
        progress: 100,
        type: 'progression'
      },
      {
        id: 'prog-3',
        name: 'Talent Master',
        description: 'Unlock all talent pages.',
        talentPoints: 600,
        goldNuggets: 20000,
        starCoins: 1500,
        experiencePoints: 3000000,
        unlocked: false,
        progress: 58,
        type: 'progression'
      },
      {
        id: 'prog-4',
        name: 'Ascended',
        description: 'Reach level 1000.',
        talentPoints: 1000,
        goldNuggets: 50000,
        starCoins: 5000,
        experiencePoints: 10000000,
        unlocked: false,
        progress: 12,
        type: 'progression'
      }
    ]
  },
  {
    id: 'social',
    name: 'Social & Guilds',
    icon: Users,
    achievements: [
      {
        id: 'social-1',
        name: 'Social Butterfly',
        description: 'Join your first guild.',
        talentPoints: 40,
        goldNuggets: 150,
        starCoins: 30,
        experiencePoints: 10000,
        unlocked: false,
        progress: 0,
        type: 'social'
      },
      {
        id: 'social-2',
        name: 'Team Player',
        description: 'Participate in 25 group hunts.',
        talentPoints: 250,
        goldNuggets: 5000,
        starCoins: 250,
        experiencePoints: 500000,
        unlocked: false,
        progress: 16,
        type: 'social'
      },
      {
        id: 'social-3',
        name: 'Guild Officer',
        description: 'Achieve officer rank in your guild.',
        talentPoints: 350,
        goldNuggets: 7000,
        starCoins: 400,
        experiencePoints: 750000,
        unlocked: false,
        progress: 0,
        type: 'social'
      },
      {
        id: 'social-4',
        name: 'Leader of Legends',
        description: 'Lead your guild to victory in a war.',
        talentPoints: 500,
        goldNuggets: 15000,
        starCoins: 800,
        experiencePoints: 2000000,
        unlocked: false,
        progress: 0,
        type: 'social'
      }
    ]
  }
];

export default function AchievementsPage() {
  const [selectedCategory, setSelectedCategory] = useState('exploration');
  const [showModal, setShowModal] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [claimedRewards, setClaimedRewards] = useState(new Set());

  const currentCategory = achievementCategories.find(cat => cat.id === selectedCategory);
  const totalAchievements = achievementCategories.reduce((sum, cat) => sum + cat.achievements.length, 0);
  const unlockedCount = achievementCategories.reduce((sum, cat) =>
    sum + cat.achievements.filter(a => a.unlocked).length, 0
  );

  // Calculate total rewards claimed
  const getTotalRewards = () => {
    let talentPoints = 0;
    let goldNuggets = 0;
    let starCoins = 0;
    let experiencePoints = 0;

    achievementCategories.forEach(cat => {
      cat.achievements.forEach(achievement => {
        if (claimedRewards.has(achievement.id)) {
          talentPoints += achievement.talentPoints || 0;
          goldNuggets += achievement.goldNuggets || 0;
          starCoins += achievement.starCoins || 0;
          experiencePoints += achievement.experiencePoints || 0;
        }
      });
    });

    return { talentPoints, goldNuggets, starCoins, experiencePoints };
  };

  const claimedTotals = getTotalRewards();

  const openAchievementDetail = (achievement) => {
    setSelectedAchievement(achievement);
    setShowModal(true);
  };

  const claimReward = (achievementId) => {
    setClaimedRewards(new Set(claimedRewards).add(achievementId));
    setTimeout(() => {
      setShowModal(false);
      setSelectedAchievement(null);
    }, 800);
  };

  return (
    <main className="page-shell">
      <header className="page-header">
        <span className="eyebrow">Progress & Rewards</span>
        <h1>Your Achievements</h1>
        <p>
          As you journey through Evolisca, countless adventures await. Accomplish epic feats, 
          master challenging battles, and discover hidden secrets. Every milestone you reach is 
          etched into your legend—claim your rewards and showcase your accomplishments to the world!
        </p>
      </header>

      <section className="achievements-hero">
        <div className="panel achievement-stats">
          <div className="stat-item">
            <Trophy className="stat-icon" size={32} />
            <div>
              <span className="stat-label">Total Achievements Unlocked</span>
              <strong className="stat-value">{unlockedCount}/1000+</strong>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="rewards-claimed-section">
              <span className="stat-label">Rewards Claimed</span>
              <div className="rewards-list">
                <div className="reward-item">
                  <span className="reward-label">Talent Points</span>
                  <strong className="reward-value">{claimedTotals.talentPoints.toLocaleString()}+</strong>
                </div>
                <div className="reward-item">
                  <span className="reward-label">Gold Nuggets</span>
                  <strong className="reward-value">{claimedTotals.goldNuggets.toLocaleString()}+</strong>
                </div>
                <div className="reward-item">
                  <span className="reward-label">Star Coins</span>
                  <strong className="reward-value">{claimedTotals.starCoins.toLocaleString()}</strong>
                </div>
                <div className="reward-item">
                  <span className="reward-label">Experience Points</span>
                  <strong className="reward-value">{claimedTotals.experiencePoints.toLocaleString()}+</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="achievements-container">
        <div className="category-sidebar">
          <div className="category-header">
            <h3>Categories</h3>
          </div>
          <div className="category-list">
            {achievementCategories.map((category) => {
              const Icon = category.icon;
              const categoryUnlocked = category.achievements.filter(a => a.unlocked).length;
              const categoryTotal = category.achievements.length;
              return (
                <button
                  key={category.id}
                  className={`category-item ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <Icon size={20} />
                  <div className="category-info">
                    <span className="category-name">{category.name}</span>
                    <span className="category-progress">{categoryUnlocked}/{categoryTotal}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="achievements-grid">
          <div className="category-header-mobile">
            <h2>{currentCategory?.name}</h2>
          </div>
          {currentCategory?.achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`achievement-card ${achievement.unlocked ? 'unlocked' : 'locked'} ${claimedRewards.has(achievement.id) ? 'claimed' : ''}`}
              onClick={() => openAchievementDetail(achievement)}
            >
              <div className="achievement-glow"></div>
              <div className="achievement-icon">
                {achievement.unlocked ? (
                  <Trophy size={28} />
                ) : (
                  <div className="lock-icon">🔒</div>
                )}
              </div>
              <div className="achievement-content">
                <h3>{achievement.name}</h3>
                <p>{achievement.description}</p>
                {!achievement.unlocked && (
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${achievement.progress}%` }}></div>
                  </div>
                )}
              </div>
              <div className={`achievement-status ${achievement.unlocked ? 'complete' : 'incomplete'}`}>
                {achievement.unlocked ? '✓' : `${achievement.progress}%`}
              </div>
            </div>
          ))}
        </div>
      </section>

      {showModal && selectedAchievement && (
        <div className="achievement-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="achievement-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowModal(false)}>
              <X size={24} />
            </button>

            <div className="modal-header">
              <div className={`modal-icon ${selectedAchievement.unlocked ? 'unlocked' : 'locked'}`}>
                {selectedAchievement.unlocked ? (
                  <Trophy size={48} />
                ) : (
                  <div className="lock-icon-large">🔒</div>
                )}
              </div>
            </div>

            <div className="modal-content">
              <h2>{selectedAchievement.name}</h2>
              <p className="modal-description">{selectedAchievement.description}</p>

              {!selectedAchievement.unlocked && (
                <div className="modal-progress">
                  <div className="progress-label">
                    <span>Progress</span>
                    <span className="progress-number">{selectedAchievement.progress}%</span>
                  </div>
                  <div className="progress-bar-large">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${selectedAchievement.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              <div className="modal-reward">
                <h4>Rewards</h4>
                <div className="reward-list-modal">
                  <div className="reward-item-modal">
                    <span className="reward-label">Talent Points</span>
                    <strong className="reward-value-modal">{(selectedAchievement.talentPoints || 0).toLocaleString()}</strong>
                  </div>
                  <div className="reward-item-modal">
                    <span className="reward-label">Gold Nuggets</span>
                    <strong className="reward-value-modal">{(selectedAchievement.goldNuggets || 0).toLocaleString()}</strong>
                  </div>
                  <div className="reward-item-modal">
                    <span className="reward-label">Star Coins</span>
                    <strong className="reward-value-modal">{(selectedAchievement.starCoins || 0).toLocaleString()}</strong>
                  </div>
                  <div className="reward-item-modal">
                    <span className="reward-label">Experience Points</span>
                    <strong className="reward-value-modal">{(selectedAchievement.experiencePoints || 0).toLocaleString()}</strong>
                  </div>
                </div>
              </div>

              {selectedAchievement.unlocked && !claimedRewards.has(selectedAchievement.id) && (
                <button
                  className="claim-button"
                  onClick={() => claimReward(selectedAchievement.id)}
                >
                  Claim Reward
                </button>
              )}

              {claimedRewards.has(selectedAchievement.id) && (
                <div className="reward-claimed">
                  <span>✓ Reward Claimed!</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <section className="achievements-footer">
        <div className="panel">
          <h2>Keep Pushing Forward!</h2>
          <p>
            Every achievement brings you closer to legendary status. Whether you're exploring the farthest 
            reaches of Evolisca, challenging mighty bosses, or climbing the ranks of competitive tournaments, 
            your dedication will be rewarded. Continue your journey and unlock even greater achievements!
          </p>
          <div className="footer-links">
            <a href="/quests" className="button-secondary">Browse Quests</a>
            <a href="/bosses" className="button-secondary">Boss Encounters</a>
            <a href="/hunting" className="button-secondary">Hunting Grounds</a>
            <a href="/raids" className="button-secondary">Events & Raids</a>
          </div>
        </div>
      </section>
    </main>
  );
}
