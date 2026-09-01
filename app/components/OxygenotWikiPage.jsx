import Link from 'next/link';
import DirectoryRecommendation from '@/app/components/DirectoryRecommendation';
import KeywordPageCommunity from '@/app/components/KeywordPageCommunity';
import ServerLogo from '@/app/components/ServerLogo';
import { buildServerSlug } from '@/lib/server-paths';
import { buildCuratedJsonLd } from '@/lib/curated-pages';
import { fetchDirectoryServers } from '@/lib/directory-data';

export const oxygenotPage = {
  slug: 'oxygenot',
  path: '/servers/oxygenot',
  type: 'server',
  title: 'OxygenOT Server Guide: PvP-E, Systems, Client & Activity',
  h1: 'OxygenOT: server status, PvP-E, systems, and how to play',
  primaryKeyword: 'OxygenOT',
  keywords: [
    'OxygenOT',
    'OxygenOT server',
    'OxygenOT Open Tibia',
    'OxygenOT download',
    'OxygenOT PvP',
    'OxygenOT PvP-E',
    'OxygenOT daily tasks',
    'OxygenOT client',
    'OxygenOT players online',
  ],
  metaDescription: 'OxygenOT server guide covering Open PvP, weekly PvP-E, client updates, quests, dungeons, bosses, daily tasks, attributes, Hunt Analyzer, safe downloads, activity, and sources.',
  updatedAt: '2026-08-31',
  sourceLinks: [
    { label: 'OxygenOT official website', href: 'https://oxygenot.live/' },
    { label: 'OxygenOT server information', href: 'https://oxygenot.live/serverinfo' },
    { label: 'OxygenOT PvP guide', href: 'https://oxygenot.live/pvp' },
    { label: 'OxygenOT official rules', href: 'https://oxygenot.live/rules' },
    { label: 'OxygenOT downloads', href: 'https://oxygenot.live/download' },
    { label: 'OxygenOT quests', href: 'https://oxygenot.live/quests' },
    { label: 'OxygenOT dungeons', href: 'https://oxygenot.live/dungeons' },
    { label: 'OxygenOT bosses', href: 'https://oxygenot.live/bosses' },
    { label: 'OxygenOT daily tasks', href: 'https://oxygenot.live/daily_tasks' },
    { label: 'OxygenOT attributes', href: 'https://oxygenot.live/attribute_points' },
    { label: 'OxygenOT changelog', href: 'https://oxygenot.live/changelog' },
    { label: 'OxygenOT official Discord', href: 'https://discord.gg/oxygenot' },
    { label: 'OxygenOT community launch archive', href: 'https://opentibiaservers.com/' },
    { label: 'OTServlist players-online ranking', href: 'https://otservlist.org/list-server_players_online-desc.html' },
    { label: 'OpenTibiaServers directory', href: '/' },
  ],
  faqs: [
    {
      question: 'What is OxygenOT?',
      answer: 'OxygenOT is a custom Open Tibia server with an official Open PvP profile, a weekly PvP-E experience event, custom quests, dungeons, bosses, crafting, fishing, daily tasks, attributes, upgrades, and a custom client for Windows and Android.',
    },
    {
      question: 'What are the OxygenOT rates?',
      answer: 'The official server information page lists x6 magic, x4 skills, x1 loot, x3 offline magic, and x2 offline skills, with experience stages linked separately. The directory snapshot labels OxygenOT x50 and PVPe, so those public-list values should be treated as a separate dated listing profile rather than the complete official rate table.',
    },
    {
      question: 'What is OxygenOT PvP-E?',
      answer: 'PvP-E runs from Saturday after Global Save until Sunday Global Save. It gives experience for player kills, adds 50% monster experience, uses a separate frag system, allows 30 frags before Red Skull and 45 before banishment, and decays PvP-E frags at one per 60 minutes.',
    },
    {
      question: 'Where is OxygenOT hosted and how many clients are allowed?',
      answer: 'The official server information page identifies Germany hosting, Europe/America/Brazil proxy regions, and a four-character-per-IP limit. The primary directory row separately reports Sweden as its location signal, so players should use official connection information rather than relying on the directory region field.',
    },
    {
      question: 'How do OxygenOT dungeons work?',
      answer: 'The official dungeon guide describes solo or party entry for up to four players with different IPs, a monster-clear objective, a boss charge earned from completing the dungeon, and a boss encounter. Exact dungeon names, rewards, and current requirements should be checked on the live Dungeons page.',
    },
    {
      question: 'Does OxygenOT support Android?',
      answer: 'Yes. OxygenOT’s official material describes Windows and Android support through its custom OTClient. The changelog also documents mandatory client updates and an Android APK path, so use the official Downloads page for the current package.',
    },
    {
      question: 'What are OxygenOT daily tasks?',
      answer: 'Daily Tasks are assigned by NPC Omran and can reward gold, premium points, and silver tokens. The official public material groups them from Beginner at level 1 through Legendary at level 2,000 and limits players to one task per day.',
    },
  ],
};

const contents = [
  ['overview', 'Overview & network identity'],
  ['facts', 'Reference facts'],
  ['connection', 'Connection, client & platforms'],
  ['pvp', 'Open PvP & PvP-E'],
  ['systems', 'Systems & progression'],
  ['content', 'Quests, dungeons & bosses'],
  ['tasks', 'Daily tasks & hunting'],
  ['updates', 'Season IX updates'],
  ['rules', 'Rules, AFK checks & safety'],
  ['activity', 'Activity Signals'],
  ['record', 'Living Record'],
  ['faq', 'OxygenOT FAQ'],
  ['sources', 'What Public Sources Already Tell Us'],
  ['media', 'Public Screenshot and Media Sources'],
  ['listings', 'Matching Live Listings'],
  ['external-links', 'External Links'],
];

const referenceRows = [
  ['Official identity', 'Custom Open Tibia server', 'The official website describes OxygenOT as a custom server with its own client, systems, events, and progression.'],
  ['Official host', 'oxygenot.live', 'Official Server Information lists oxygenot.live and 24/7 operation; the game listing uses login.oxygenot.live:7171.'],
  ['Directory host', 'login.oxygenot.live:7171', 'Primary public directory endpoint recorded in the inventory and community launch archive.'],
  ['Official world type', 'Open PvP', 'Official Server Information value; PvP-E is a separate weekly event layer.'],
  ['Directory profile', 'x50 / PVPe / version n/a', 'Dated public directory label that differs from the official Open PvP classification and official rate details.'],
  ['Players snapshot', '597 (878 unique IPs) / 1,000', 'Public directory snapshot associated with the OxygenOT listing.'],
  ['Uptime snapshot', '99.14%', 'Directory uptime signal; not an operator service-level guarantee.'],
  ['Official activity capture', '556 / 1,000', 'Official Server Information page count at a separate extraction time.'],
  ['Official region', 'Germany', 'Official page identifies German hosting with Europe, America, and Brazil proxies.'],
  ['Archive launch record', 'Season VIII Beta planned for 27 Feb 2025', 'May 2024 community launch post; preserved as historical planning context, not current season status.'],
  ['Current update identity', 'Patch 3.9 - Season IX', 'Official news/changelog entry dated 31 August 2026.'],
];

const connectionRows = [
  ['Server host', 'oxygenot.live', 'Official Server Information page; confirm the current login endpoint in the client or official support channel.'],
  ['Directory endpoint', 'login.oxygenot.live:7171', 'Public directory and archived launch record; use as a discovery signal until the operator confirms it.'],
  ['Hosting', 'Germany, online 24/7', 'Official Server Information page.'],
  ['Proxy regions', 'Europe, America, Brazil', 'Official proxy choices intended to reduce latency for nearby players.'],
  ['Global Save', '08:00 GMT daily', 'Official Server Information value; schedules can change with maintenance.'],
  ['Characters per IP', '4', 'Official general limit. Separate PvP and AFK rules may impose additional behavior constraints.'],
  ['Magic / skills', 'x6 / x4', 'Official Server Information page.'],
  ['Loot / offline rates', 'x1 loot · x3 offline magic · x2 offline skills', 'Official Server Information page.'],
  ['Client', 'Custom OTClient for Windows and Android', 'Official homepage and changelog; latest required client version must be checked before login.'],
];

const pvpRows = [
  ['World type', 'Open PvP'],
  ['Protection level', '150'],
  ['PZ lock', '1 minute'],
  ['White skull', '5 minutes'],
  ['Red skull', '3 days'],
  ['Player-killing ban', '7 days'],
  ['Frags to Red Skull', '10 daily · 25 weekly · 50 monthly'],
  ['Frags to ban', '20 daily · 35 weekly · 60 monthly'],
  ['Frag decay', '5 hours daily · 2 days weekly · 5 days monthly'],
  ['Low-level kill rule', 'Killing a player below half the killer’s level gives 3 frags instead of 1.'],
  ['Normal player EXP', 'The official page links experience stages; exact stage table should be checked before planning a build.'],
];

const pvpeRows = [
  ['Schedule', 'Saturday after Global Save through Sunday Global Save; one day of the week.'],
  ['Monster EXP', '+50% monster experience during PvP-E.'],
  ['PvP-E experience', 'x0.4 rate with a 30B daily cap.'],
  ['Eligible target range', 'Target must be at least 70% of the attacker’s level; repeated kills of the same player lose 50% experience until server save.'],
  ['PvP-E frags', 'Separate from normal daily, weekly, and monthly frags.'],
  ['PvP-E Red Skull', '30 PvP-E frags. Existing Red Skulls are cleared when the event begins; PvP-E Red Skulls clear at Sunday Global Save.'],
  ['PvP-E banishment', '45 PvP-E frags while Red-Skulled.'],
  ['PvP-E decay', 'One PvP-E frag decays every 60 minutes.'],
  ['Same-IP kills', 'No experience is awarded for kills involving the same IP.'],
  ['Death and cap', 'Death deducts from PvP-E experience capacity; reaching the cap and dying can free capacity for later gains.'],
];

const systemsRows = [
  ['Achievements', 'Replaced the old Missions system with categories and many new goals.'],
  ['AFK Check', 'Certain bosses can trigger a popup with 2 minutes and 2 attempts to answer; repeated failures or no response can lead to warnings and jail.'],
  ['Attributes', 'Loot Rate attribute added; attribute caps and obtainable points were expanded, with points obtainable from monsters, dungeons, and daily chests.'],
  ['Party Loot Bonus', 'Each unique vocation in a party contributes +12.5% monster loot, up to four vocations and +50% total.'],
  ['Hunt Analyzer', 'Tracks Lowest HP/MP, reset/copy tools, and persistent Party Loot sessions across relogs, restarts, and party changes.'],
  ['Daily Task Tracker', 'Shows daily-task progress live in the client as monsters are killed.'],
  ['Bank', 'Deposit All and selected-currency controls make it easier to move currencies into the bank.'],
  ['Mana Runes', 'New stages were added for levels 5,500 and 6,000.'],
  ['Guild tools', '`!gkills 3`, `!gkills 6`, `!gkills 12`, and `!gkills all` show guild frag rankings over different periods.'],
  ['Crafting', 'Craft Window improvements add detailed item tooltips and correct item information such as Sunforged Rod.'],
  ['Auto Loot', 'Official navigation exposes Auto Loot and the changelog includes related item and interface improvements.'],
  ['Fishing', 'Fishing Bosses can provide Attribute Points until the monster-point threshold is reached.'],
  ['Stamina', 'Enabled; the official site links a dedicated Stamina guide.'],
  ['Houses and guilds', 'House purchase requires level 200 and inactive houses clean after 10 days; guild creation requires level 50.'],
];

const dailyTaskRows = [
  ['Beginner', 'Level 1+', '100 Rotworms example', 'Gold, premium points, and silver-token rewards are described generally; check the live table.'],
  ['Intermediate', 'Level 100+', '2,000 Priestess of the Wild Sun example', 'Daily Task category from the official public task summary.'],
  ['Advanced', 'Level 500+', '500 Breach Broods example', 'Daily Task category from the official public task summary.'],
  ['Expert', 'Level 700+', '3,000 Solar Griffins example', 'Daily Task category from the official public task summary.'],
  ['Master', 'Level 1,500+', '1 Ignis Magnus example', 'Daily Task category from the official public task summary.'],
  ['Legendary', 'Level 2,000+', '300 Pyros example', 'Daily Task category from the official public task summary.'],
];

const contentRows = [
  ['Quests', 'The official Quests page is the source for requirements, rewards, locations, and cooldowns. Patch 3.9 added timers to Annihilator Quests to prevent extended AFK presence.'],
  ['Dungeons', 'Players can enter solo or in a party of up to four with different IPs, clear a set of monsters, earn a boss charge, and face a dungeon boss.'],
  ['Bosses', 'Five new bosses were added to level-5,000 hunting areas in Patch 3.9. Some bosses use AFK Checks and timed-boss indicators.'],
  ['Crafting', 'Crafting combines resources into items; current recipes, materials, stations, and costs belong to the official Wiki and Craft Window.'],
  ['Fishing', 'Fishing Bosses appear in the Attribute Points rules; the reviewed public material does not give the full fishing economy or reward table.'],
  ['Hunting areas', 'The official changelog added Dwarf Guards to Rotworms, Demon Skeletons to Cyclops, and Stone Golems to Warlock hunting areas.'],
];

const updateRows = [
  ['31 Aug 2026', 'Patch 3.9 - Season IX', 'Five level-5,000 bosses, eight level-6,000/6,400 spells, Achievements, AFK Checks, Party Loot Bonus, Daily Task Tracker, Bank Deposit All, Browse Field, container pagination, guild commands, and Annihilator timers.'],
  ['12 Aug 2026', 'PvP-E and Attributes rework', 'Separate PvP-E frags, 30B cap, 70% target threshold, 20% PvP-E EXP reduction, new Loot Rate attribute, and higher attribute limits.'],
  ['29 Jul 2026', 'Client 4.0.8', 'Windows and Android client update with Hunt Analyzer optimizations.'],
  ['28 Jul 2026', 'Hunt Analyzer and hunting areas', 'Lowest HP/MP, Party Loot persistence, new area creatures, and Craft Window correction.'],
  ['25 Jul 2026', 'Daily Mission correction', 'A streak reset issue was corrected with compensation for eligible players.'],
  ['24 Jul 2026', 'Daily Mission changes', 'Dungeon Boss and Lever Boss-only items were removed from daily requirements; some item loot rates were increased.'],
  ['22 Jul 2026', 'Client 4.0.6 and Mana Runes', 'NPC-channel fix plus new Mana Rune stages for levels 5,500 and 6,000.'],
  ['16 Jul 2026', 'Client 4.0.4', 'Crash, future-update graphics, and minimap-loading fixes.'],
];

const rulesRows = [
  ['AFK boss checks', 'Affected bosses can show a check with 2 minutes and 2 attempts. Failed or unanswered checks can produce warnings and jail; all online characters may be jailed with the affected character.'],
  ['Combo Bot wording', 'Official news contains a chronology conflict: one announcement removed a prior Combo Bot rule due to false positives, while a later ticker warns against synchronized automated follow-and-attack behavior. Confirm current enforcement on the live Rules page or Discord.'],
  ['Reports', 'Discord support tickets should include clear, valid evidence such as video for suspected prohibited behavior.'],
  ['Client integrity', 'Use only the official Download page and current required client. Client updates can become mandatory after a server save.'],
  ['Account paths', 'Official pages expose account creation, management/login, lost-account recovery, rules, support list, and Premium Points.'],
  ['Premium points', 'Use official website purchase paths; avoid copied payment links, private sellers, and credentials shared with the site assistant or other players.'],
  ['IP and PvP', 'The general limit is four characters per IP, with separate same-IP kill and PvP-E restrictions.'],
];

const activityRows = [
  ['OpenTibiaServers listing', '597 (878 unique IPs) / 1,000', '99.14% uptime · x50 · PVPe · version n/a', 'Dated directory snapshot associated with login.oxygenot.live:7171.'],
  ['Inventory record', '878 peak', 'login.oxygenot.live:7171 · Sweden · PVP-Enforced · version n/a', 'Separate inventory observation dated July 25, 2026; region and PvP labels differ from official Server Information.'],
  ['Official Server Information', '556 / 1,000', 'Online 24/7 · Germany · Open PvP', 'World status capture from the operator’s page at a different time.'],
  ['Official homepage/Discord widgets', '58 website visitors · 279 Discord online', 'Dynamic public widgets', 'Useful community activity signals, not a substitute for a synchronized player count.'],
];

const mediaSources = [
  ['OxygenOT official homepage', 'https://oxygenot.live/', 'Official branding, current news, status widgets, social links, and system navigation.'],
  ['OxygenOT Season IX news', 'https://oxygenot.live/news', 'Patch screenshots and update context for systems, bosses, client UI, and events.'],
  ['OxygenOT Open Graph image', 'https://oxygenot.live/images/global/og-image.png', 'Officially served social preview image; use direct attribution and permission standards.'],
  ['OxygenOT Facebook', 'https://facebook.com/OxygenOT', 'Official social channel linked by the website.'],
  ['OxygenOT Instagram', 'https://www.instagram.com/oxygen.ot', 'Official social channel linked by the website.'],
  ['OxygenOT YouTube', 'https://www.youtube.com/@oxygen-ot', 'Official video channel linked by the website.'],
  ['OxygenOT Discord', 'https://discord.gg/oxygenot', 'Official community/support channel; invite and membership can change.'],
  ['Archived launch thread', 'https://opentibiaservers.com/', 'Historical launch context, screenshots or owner posts where the archive preserves them.'],
];

export default async function OxygenotWikiPage() {
  const directoryData = await fetchDirectoryServers({ page: 1, pageSize: 8, search: 'OxygenOT', onlineOnly: false });
  const directoryServers = Array.isArray(directoryData?.servers) ? directoryData.servers.filter(Boolean) : [];
  const jsonLd = buildCuratedJsonLd(oxygenotPage);

  return (
    <main className="cyntara-wiki min-h-screen" data-server-slug="oxygenot">
      {jsonLd.map((entry, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }} />)}

      <header className="cyntara-wiki__header">
        <h1>{oxygenotPage.h1}</h1>
        <small>From OpenTibiaServers Wiki, the primary Open Tibia server directory</small>
      </header>

      <div className="cyntara-wiki__grid">
        <article className="cyntara-wiki__content">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="min-w-0 flex-1">
              <p><strong><em><u>OxygenOT</u></em></strong> is a custom <strong>Open Tibia server</strong> built around Open PvP, a weekly <strong>PvP-E</strong> experience window, custom quests, dungeons, bosses, crafting, fishing, daily tasks, attributes, upgrades, and a dedicated OTClient. Its official pages describe Windows and Android support, German hosting with regional proxies, and a living update stream under <strong>Season IX</strong>.</p>
              <p>This <strong><em>OxygenOT server guide</em></strong> separates official server information from the public listing and archived launch record. That distinction matters for searches such as <strong>OxygenOT download</strong>, <strong>OxygenOT rates</strong>, <strong>OxygenOT PvP-E</strong>, <strong>OxygenOT daily tasks</strong>, and <strong>OxygenOT players online</strong>: the sources carry different timestamps, labels, and scopes.</p>
            </div>
            <div className="w-full shrink-0 md:w-64"><ServerLogo server={{ name: 'OxygenOT', slug: 'oxygenot', host: 'oxygenot.live' }} size="profile" /></div>
          </div>

          <nav className="cyntara-wiki__toc" aria-label="Table of Contents"><h2>Contents</h2><ol>{contents.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol></nav>

          <section id="overview">
            <SectionHeading>Overview &amp; network identity</SectionHeading>
            <p>OxygenOT is best understood as a custom client ecosystem rather than a numbered-protocol nostalgia server. The official site publishes its own client releases, Hunt Analyzer, attributes, PvP-E rules, custom content, and system pages, while the archived community listing records a Germany-tagged custom EVO launch under the OxygenOT brand.</p>
            <p>The official identity is <strong>Open PvP</strong> with a separate weekly PvP-E event. The public directory currently exposes a <strong>x50 / PVPe</strong> listing profile with a different Sweden region signal and 878-player peak. The archive identifies <strong>Season VIII Beta</strong> planning for February 2025, while current official news is labeled <strong>Patch 3.9 - Season IX</strong>. These are useful historical layers, not contradictions to hide.</p>
            <div className="cyntara-wiki__callout"><strong>Source boundary</strong><p>Use official OxygenOT pages for connection, rules, client versions, PvP mechanics, and current features. Use the directory and <Link href="/community_archive">community archive</Link> for dated discovery, launch history, and independent context.</p></div>
          </section>

          <section id="facts">
            <SectionHeading>Reference facts</SectionHeading>
            <p>This table is a compact <strong>OxygenOT server status</strong> reference. Every time-sensitive number is tied to the source layer that produced it.</p>
            <Table headers={['Field', 'Recorded value', 'Evidence and context']} rows={referenceRows} />
          </section>

          <section id="connection">
            <SectionHeading>Connection, client &amp; platforms</SectionHeading>
            <p>The official <a href="https://oxygenot.live/serverinfo" target="_blank" rel="nofollow noopener noreferrer">Server Information</a> page lists OxygenOT as online 24/7 on `oxygenot.live`, hosted in Germany with Europe, America, and Brazil proxy regions. The directory and archived launch record use <code>login.oxygenot.live:7171</code>. Verify the live connection path in the official client before connecting.</p>
            <Table headers={['Connection field', 'Official or public value', 'Context']} rows={connectionRows} />
            <p>OxygenOT’s official changelog shows why an old installer can become unsafe or unusable: Client 4.0.9, 4.1.0, and 4.1.1 were described as required at specific server saves, with Windows, Android, desktop, and Android APK paths changing over time. The <a href="https://oxygenot.live/download" target="_blank" rel="nofollow noopener noreferrer">official Downloads page</a> should be the only installation source.</p>
            <div className="cyntara-wiki__callout"><strong>Platform support</strong><p>The official material confirms Windows and Android/custom OTClient support. It does not establish Linux or macOS support in the reviewed pages, so do not promise those platforms from the directory row.</p></div>
          </section>

          <section id="pvp">
            <SectionHeading>Open PvP &amp; PvP-E</SectionHeading>
            <p>OxygenOT’s normal world is officially <strong><em><u>Open PvP</u></em></strong>. Protection level 150, frag thresholds, skull durations, and the player-killing ban are published on the server-information page. PvP-E is a separate weekend event with its own frags, experience cap, target range, and reset behavior.</p>
            <Table headers={['Normal PvP setting', 'Official value']} rows={pvpRows} />
            <h3>PvP-E weekend</h3>
            <Table headers={['PvP-E setting', 'Official value']} rows={pvpeRows} />
            <p>The PvP-E rules make OxygenOT a particularly high-intent search for players who want a scheduled competitive window rather than constant unrestricted PvP. The event’s exact current start depends on Global Save, so check the live <a href="https://oxygenot.live/pvp" target="_blank" rel="nofollow noopener noreferrer">PvP guide</a> and official announcements before arranging a guild fight.</p>
            <div className="cyntara-wiki__callout"><strong>Combo Bot rule caution</strong><p>Official news contains a chronology change around Combo Bot enforcement: one announcement says the prior rule was removed because of false positives, while a later ticker warns against synchronized automated follow-and-attack behavior. Confirm the current enforceable wording with staff before PvP-E.</p></div>
          </section>

          <section id="systems">
            <SectionHeading>Systems &amp; progression</SectionHeading>
            <p>The official OxygenOT ecosystem is broader than its directory label. Players searching for an <strong>OxygenOT progression guide</strong> will encounter combat attributes, party loot, daily tracking, custom UI, guild tools, client systems, and content systems that continue to change through the changelog.</p>
            <Table headers={['System', 'Documented player context']} rows={systemsRows} />
            <p>The current systems are designed to connect together: attributes and party composition affect loot; Hunt Analyzer helps optimize sessions; daily tasks and missions add repeatable goals; dungeons and bosses feed progression; and the custom client exposes bank, task, item, and combat information directly in the interface.</p>
          </section>

          <section id="content">
            <SectionHeading>Quests, dungeons &amp; bosses</SectionHeading>
            <p>OxygenOT’s official navigation exposes dedicated pages for <strong>quests</strong>, <strong>dungeons</strong>, <strong>bosses</strong>, monsters, and crafting. The public Patch 3.9 notes provide enough detail to outline the content without pretending that a short update entry is a complete walkthrough.</p>
            <Table headers={['Content area', 'Source-backed details']} rows={contentRows} />
            <p>The Dungeon System is especially distinctive: the official description says dungeons can be entered solo or with up to four players using different IPs, require clearing monsters, lead to a boss encounter through a boss charge, and grant rewards. Exact dungeon names, timers, rewards, and current requirements belong to the live <a href="https://oxygenot.live/dungeons" target="_blank" rel="nofollow noopener noreferrer">Dungeons page</a>.</p>
            <p>Patch 3.9 also adds eight new spells for levels 6,000 and 6,400 and five bosses in level-5,000 hunting areas. Check the current <a href="https://oxygenot.live/bosses" target="_blank" rel="nofollow noopener noreferrer">Bosses page</a> for names, AFK indicators, schedules, and rewards instead of relying on an old screenshot.</p>
          </section>

          <section id="tasks">
            <SectionHeading>Daily tasks &amp; hunting</SectionHeading>
            <p>The <a href="https://oxygenot.live/daily_tasks" target="_blank" rel="nofollow noopener noreferrer">Daily Tasks</a> system assigns one daily objective through <strong>NPC Omran</strong>. The public summary groups tasks from Beginner to Legendary and names gold, premium points, and silver tokens as reward categories. The client’s Daily Task Tracker updates progress live as monsters are killed.</p>
            <Table headers={['Category', 'Minimum level', 'Public example', 'Context']} rows={dailyTaskRows} />
            <p>Daily Missions are related but not identical to Daily Tasks. Recent changelog entries corrected Golden Boots eligibility for players below level 1,000, removed dungeon-boss-only items from daily requirements, and repaired a streak reset issue. This is a living system, so check current requirements after each official update.</p>
            <h3>Hunting and party optimization</h3>
            <p>OxygenOT’s official updates add monsters to existing hunting areas and improve Hunt Analyzer sessions. A party with four unique vocations can reach the published +50% monster-loot ceiling through the Party Loot Bonus. The official experience stages remain linked from Server Information rather than reproduced as an unverified flat multiplier.</p>
          </section>

          <section id="updates">
            <SectionHeading>Season IX updates</SectionHeading>
            <p>The official changelog makes OxygenOT a <strong>living server record</strong>, with client, balance, system, and content changes continuing through July and August 2026. The timeline below is a dated summary, not a promise that every item remains active in exactly the same form.</p>
            <Table headers={['Date', 'Update', 'Documented changes']} rows={updateRows} />
            <p>For players comparing <strong>OxygenOT Season IX</strong> with other current servers, the update cadence is part of the product: client requirements, daily mission logic, PvP-E balance, attributes, bosses, and interface features are all maintained through official news. Use the <a href="https://oxygenot.live/changelog" target="_blank" rel="nofollow noopener noreferrer">full changelog</a> before downloading or planning a long progression route.</p>
          </section>

          <section id="rules">
            <SectionHeading>Rules, AFK checks &amp; safety</SectionHeading>
            <p>The official <a href="https://oxygenot.live/rules" target="_blank" rel="nofollow noopener noreferrer">Rules page</a> and Discord support channel control current enforcement. The public news specifically documents AFK checks for bosses, evidence requirements for reports, client update requirements, and a chronology of Combo Bot policy changes.</p>
            <Table headers={['Rule area', 'Published position']} rows={rulesRows} />
            <ol><li>Create an account through the official <a href="https://oxygenot.live/account/create" target="_blank" rel="nofollow noopener noreferrer">account creation</a> path.</li><li>Download the current Windows or Android client from <a href="https://oxygenot.live/download" target="_blank" rel="nofollow noopener noreferrer">oxygenot.live/download</a>.</li><li>Read the current rules for automation, AFK boss participation, PvP-E, same-IP behavior, and reports.</li><li>Use official Discord tickets for support and include truthful, clear evidence where requested.</li><li>Never share passwords, recovery information, or payment credentials in chat, with a bot, or through an unofficial mirror.</li></ol>
            <div className="cyntara-wiki__callout"><strong>AFK boss warning</strong><p>Do not assume that a permitted client feature makes unattended boss participation acceptable. The AFK Check system is specifically designed to detect and punish failed or unanswered checks.</p></div>
          </section>

          <section id="activity">
            <SectionHeading>Activity Signals</SectionHeading>
            <p>Players searching <strong><em>OxygenOT players online</em></strong> should compare the scope and timestamp behind each signal. The directory row, inventory observation, official status page, website widget, and Discord widget are different measurements.</p>
            <Table headers={['Source signal', 'Activity value', 'Profile context', 'Interpretation']} rows={activityRows} />
            <div className="cyntara-wiki__callout"><strong>Do not merge regional labels</strong><p>The directory marks the row Sweden and PVP-Enforced, while official Server Information says Germany and Open PvP. Preserve both dated signals and use the operator’s current connection and rules pages for play decisions.</p></div>
          </section>

          <section id="record">
            <SectionHeading>Living Record</SectionHeading>
            <p>OxygenOT’s record combines a May 2024 archived owner announcement, a planned Season VIII Beta date in February 2025, a current custom-server website, and the official Patch 3.9 / Season IX update stream. Its identity has remained centered on custom content, client development, and systems that are actively adjusted through player feedback and changelogs.</p>
            <div className="grid gap-4 md:grid-cols-3"><FactCard label="Current official identity" text="German-hosted Open PvP server with regional proxies, Windows/Android client support, and weekly PvP-E." /><FactCard label="Progression identity" text="Custom quests, dungeons, bosses, attributes, crafting, daily tasks, Party Loot, Hunt Analyzer, spells, and client-driven UI systems." /><FactCard label="Open documentation" text="Exact normal EXP stages, complete vocation details, full quest/dungeon/boss catalogues, and current rule wording require live page verification." /></div>
            <p>Owners and players can improve this <strong>OxygenOT wiki profile</strong> through the <Link href="/submit-server">claim and submission flow</Link>, <Link href="/community_archive">community archive</Link>, dated notes, and approved screenshots. A durable record should preserve update history and conflicting snapshots rather than erase the evidence trail.</p>
          </section>

          <section id="faq">
            <SectionHeading>OxygenOT FAQ</SectionHeading>
            <div className="space-y-4">{oxygenotPage.faqs.map((faq) => <details key={faq.question} className="rounded border border-black bg-white p-4"><summary className="cursor-pointer text-base font-bold text-black">{faq.question}</summary><p className="mt-3 text-sm leading-7 text-black">{faq.answer}</p></details>)}</div>
          </section>

          <section id="sources">
            <SectionHeading>What Public Sources Already Tell Us</SectionHeading>
            <p>The official OxygenOT website, Server Information, PvP guide, rules, downloads, quests, dungeons, bosses, daily tasks, attributes, changelog, Discord, and social channels provide the primary evidence trail. The OpenTibiaServers inventory and community launch archive add dated host, activity, region, version, launch, and historical context.</p>
            <div className="grid gap-3 md:grid-cols-2">{oxygenotPage.sourceLinks.slice(0, 12).map((source) => <SourceLink key={source.href} href={source.href} label={source.label} />)}</div>
            <div className="cyntara-wiki__callout"><strong>Evidence standard</strong><p>Current client requirements, event timing, PvP enforcement, account procedures, rewards, player counts, and system limits should be tied to a current official page or dated operator announcement. When a page leaves a field open, this guide does not fill it with generic OT assumptions.</p></div>
          </section>

          <section id="media">
            <SectionHeading>Public Screenshot and Media Sources</SectionHeading>
            <p>OxygenOT’s official news and social channels expose screenshots, client UI changes, contest context, and community activity. This page links to those sources without mirroring external artwork. Submit approved screenshots through the community section below.</p>
            <div className="grid gap-3 md:grid-cols-2">{mediaSources.map(([label, href, note]) => <SourceLink key={href} href={href} label={label} note={note} />)}</div>
          </section>

          <DirectoryRecommendation />

          <section id="listings">
            <SectionHeading>Matching Live Listings</SectionHeading>
            {directoryServers.length ? <div className="grid gap-3">{directoryServers.map((server) => <Link key={server.id || `${server.name}-${server.ip}`} href={`/servers/${buildServerSlug(server)}`} className="rounded border border-black bg-white p-4 hover:no-underline"><div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"><div><h3 className="text-base font-bold text-black">{server.name}</h3><p className="text-sm text-black">{server.host || server.ip || 'Host pending'} - {server.version || 'Unknown client'} - {server.world_type || 'World type pending'} - {server.location || 'Location pending'}</p></div><div className="text-sm font-bold text-black">{Number(server.players_online || 0).toLocaleString()} online</div></div></Link>)}</div> : <p>No matching listing is available in the current directory response.</p>}
          </section>

          <section id="external-links">
            <SectionHeading>External Links</SectionHeading>
            <ul>{oxygenotPage.sourceLinks.map((source) => <li key={source.href}><ExternalLink href={source.href}>{source.label}</ExternalLink></li>)}<li><ExternalLink href="https://evomanias.com">Evomanias - Recommended Open Tibia Server</ExternalLink></li></ul>
          </section>
        </article>

        <aside className="cyntara-wiki__sidebar">
          <div className="cyntara-wiki__infobox">
            <div className="cyntara-wiki__infobox-header">OxygenOT</div>
            <ServerLogo server={{ name: 'OxygenOT', slug: 'oxygenot', host: 'oxygenot.live' }} size="profile" />
            <table><tbody>
              <tr><th>Official type</th><td>Open PvP</td></tr>
              <tr><th>Official host</th><td><code>oxygenot.live</code></td></tr>
              <tr><th>Directory host</th><td><code>login.oxygenot.live:7171</code></td></tr>
              <tr><th>Directory profile</th><td>x50 / PVPe / n/a</td></tr>
              <tr><th>Official rates</th><td>x6 magic / x4 skills / x1 loot</td></tr>
              <tr><th>Player signal</th><td>597 / 1,000 directory</td></tr>
              <tr><th>Official status</th><td>556 / 1,000 at capture</td></tr>
              <tr><th>Official region</th><td>Germany + regional proxies</td></tr>
              <tr><th>PvP-E</th><td>Weekly Saturday–Sunday event</td></tr>
              <tr><th>Core systems</th><td>Tasks, dungeons, bosses, attributes, Hunt Analyzer</td></tr>
              <tr><th>Platforms</th><td>Windows and Android</td></tr>
              <tr><th>Current update</th><td>Patch 3.9 - Season IX</td></tr>
              <tr><th>Website</th><td><a href="https://oxygenot.live/" target="_blank" rel="nofollow noopener noreferrer">oxygenot.live</a></td></tr>
            </tbody></table>
          </div>

          <div className="cyntara-wiki__callout"><strong>Why This Page Exists</strong><p>To turn a time-sensitive <strong>OxygenOT server list</strong> row into a durable guide for PvP-E, clients, systems, daily tasks, bosses, rules, updates, screenshots, and community history.</p><Link href="/submit-server">Claim or correct this listing</Link></div>

          <div className="rounded border border-gray-200 bg-white p-5"><h2 className="mb-3 text-base font-bold text-black">Related Directory Pages</h2><div className="flex flex-wrap gap-2"><Link href="/servers/demolidores" className="rounded border border-black px-3 py-2 text-sm font-semibold text-black hover:no-underline">Demolidores</Link><Link href="/servers/cyntara" className="rounded border border-black px-3 py-2 text-sm font-semibold text-black hover:no-underline">Cyntara</Link><Link href="/servers/rubinot" className="rounded border border-black px-3 py-2 text-sm font-semibold text-black hover:no-underline">RubinOT</Link><Link href="/servers/rexia" className="rounded border border-black px-3 py-2 text-sm font-semibold text-black hover:no-underline">Rexia</Link><Link href="/resources" className="rounded border border-black px-3 py-2 text-sm font-semibold text-black hover:no-underline">Resources</Link></div></div>

          <div className="rounded border border-gray-200 bg-white p-5"><h2 className="mb-3 text-base font-bold text-black">Search These Terms</h2><div className="flex flex-wrap gap-2">{oxygenotPage.keywords.slice(0, 8).map((keyword) => <Link key={keyword} href={`/?search=${encodeURIComponent(keyword)}`} className="rounded border border-black px-3 py-2 text-sm font-semibold text-black hover:no-underline">{keyword}</Link>)}</div></div>

          <div className="rounded border border-gray-200 bg-white p-5"><h2 className="mb-3 text-base font-bold text-black">Source trail</h2><ul className="space-y-3">{oxygenotPage.sourceLinks.map((source) => <li key={source.href}><ExternalLink href={source.href}>{source.label}</ExternalLink></li>)}</ul></div>
        </aside>
      </div>

      <KeywordPageCommunity pageSlug="oxygenot" keyword="OxygenOT" />
    </main>
  );
}

function SectionHeading({ children }) {
  return <div className="cyntara-wiki__section-heading"><h2>{children}</h2></div>;
}

function Table({ headers, rows }) {
  return <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row) => <tr key={row[0]}>{row.map((value, index) => index === 0 ? <th key={value}>{value}</th> : <td key={value}>{index === 1 ? <strong>{value}</strong> : value}</td>)}</tr>)}</tbody></table></div>;
}

function FactCard({ label, text }) {
  return <div className="rounded border border-black bg-white p-4"><h3 className="text-base font-bold text-black">{label}</h3><p className="mt-2 text-sm leading-7 text-black">{text}</p></div>;
}

function ExternalLink({ href, children }) {
  const external = href.startsWith('http');
  return <a href={href} target={external ? '_blank' : undefined} rel={external ? 'nofollow noopener noreferrer' : undefined}>{children}</a>;
}

function SourceLink({ href, label, note }) {
  return <ExternalLink href={href}><span className="block rounded border border-black bg-white p-4 font-bold hover:no-underline"><span className="block">{label}</span>{note ? <span className="mt-2 block text-sm font-normal leading-6">{note}</span> : null}</span></ExternalLink>;
}
