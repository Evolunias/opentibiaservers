import Link from 'next/link';
import DirectoryRecommendation from '@/app/components/DirectoryRecommendation';
import KeywordPageCommunity from '@/app/components/KeywordPageCommunity';
import ServerLogo from '@/app/components/ServerLogo';
import { buildServerSlug } from '@/lib/server-paths';
import { buildCuratedJsonLd } from '@/lib/curated-pages';
import { fetchDirectoryServers } from '@/lib/directory-data';

export const iglaotsPage = {
  slug: 'iglaots',
  path: '/servers/iglaots',
  type: 'server',
  title: 'IglaOTS Server Guide: 15.30 PvP, Task Board, Forge & Client',
  h1: 'IglaOTS: server status, 15.30 PvP, systems, and how to play',
  primaryKeyword: 'IglaOTS',
  keywords: [
    'IglaOTS',
    'IglaOTS server',
    'IglaOTS 15.30',
    'IglaOTS Retro PvP',
    'IglaOTS Lowrate',
    'IglaOTS Offseason',
    'IglaOTS Task Board',
    'IglaOTS Forge',
    'IglaOTS download',
    'IglaOTS players online',
  ],
  metaDescription: 'IglaOTS 15.30 server guide covering Retro PvP, Season, Offseason, Lowrate, Task Board, Forge, Enchanting, bosses, charms, client safety, activity, and official wiki sources.',
  updatedAt: '2026-08-31',
  sourceLinks: [
    { label: 'IglaOTS official website', href: 'https://iglaots.net/' },
    { label: 'Igła Wiki home', href: 'https://wiki.iglaots.net/categories/home-page' },
    { label: 'Igła Wiki FAQ', href: 'https://wiki.iglaots.net/categories/faq' },
    { label: 'Igła Wiki Lowrate changelog', href: 'https://wiki.iglaots.net/categories/changelog' },
    { label: 'Igła Wiki Task Board', href: 'https://wiki.iglaots.net/categories/task-board' },
    { label: 'Igła Wiki Enchanting', href: 'https://wiki.iglaots.net/categories/enchanting' },
    { label: 'Igła Wiki Exaltation Forge', href: 'https://wiki.iglaots.net/categories/exaltion-forge' },
    { label: 'Igła Wiki Quests', href: 'https://wiki.iglaots.net/categories/quests' },
    { label: 'Igła Wiki Monster Reference', href: 'https://wiki.iglaots.net/categories/monster-reference' },
    { label: 'Igła Wiki Custom Bosses', href: 'https://wiki.iglaots.net/categories/custom-bosses' },
    { label: 'IglaOTS Season website', href: 'https://season.iglaots.net/index.php?view=faq' },
    { label: 'IglaOTS Offseason website', href: 'https://offseason.iglaots.net/' },
    { label: 'IglaOTS Lowrate website', href: 'https://lowrate.iglaots.net/' },
    { label: 'OTServlist players-online ranking', href: 'https://otservlist.org/list-server_players_online-desc.html' },
    { label: 'IglaOTS community launch archive', href: 'https://opentibiaservers.com/' },
    { label: 'OpenTibiaServers directory', href: '/' },
  ],
  faqs: [
    {
      question: 'What is IglaOTS?',
      answer: 'IglaOTS is a Polish Open Tibia server family presented through official wiki and season pages as a 15.30 Retro PvP project with Season, Offseason, and Lowrate variants. Its documented systems include Task Board, Forge, Enchanting, Bosstiary, Charms, custom bosses, raids, tokens, quests, and custom maps.',
    },
    {
      question: 'What are the IglaOTS worlds or variants?',
      answer: 'Public IglaOTS material distinguishes Season, Offseason, and Lowrate server identities. The accessible official FAQ confirms the IglaOTS brand and Retro PvP positioning, while separate variant pages are currently protected by Cloudflare in the reviewed source capture; verify the active variant and its rules before joining.',
    },
    {
      question: 'What are the IglaOTS rates?',
      answer: 'The public directory snapshot labels IglaOTS x3 EXP, PvP, and client 15.2. The official Season FAQ separately displays x20, x10, and x2 without labeling which rate each number represents, while the Lowrate changelog documents 15.30 update content rather than a complete rate table. Treat all rate values as variant- and date-sensitive.',
    },
    {
      question: 'Does IglaOTS allow cavebotting?',
      answer: 'The official FAQ prohibits cavebotting, auto-refilling, and abusing multiclient, with account deletion stated as a possible consequence. It says auto-loot and auto-Utito or other spell automation are currently allowed because they are difficult to prove; confirm the current rules for the specific variant before using any tool.',
    },
    {
      question: 'What is the IglaOTS Task Board?',
      answer: 'The official Task Board replaced Thomas the Hunter in the 15.20 update. It uses Bronze, Silver, and Gold task tiers, Bounty Points, reroll tokens, preferred slots, a four-day weekly cycle, and Bestiary-based Charm Point rewards.',
    },
    {
      question: 'What are IglaOTS Nemesis bosses?',
      answer: 'The official FAQ names Ferumbras, Orshabaal, Morgaroth, and Ghazbaran as Nemesis bosses. They spawn every 7–14 days, have increased loot, deal five times real-Tibia damage, and provide 100 times real-Tibia experience; IglaOTS also documents personal boss loot and a Soul Collector fallback system.',
    },
    {
      question: 'How do I download IglaOTS safely?',
      answer: 'Create an account and download the client only from the official IglaOTS or official variant page. The official FAQ says players log in with email and password and directs account recovery to the official Discord; never use copied launchers, unofficial mirrors, or share credentials.',
    },
  ],
};

const contents = [
  ['overview', 'Overview & variant identity'],
  ['facts', 'Reference facts'],
  ['variants', 'Season, Offseason & Lowrate'],
  ['client', 'Client, account & safety'],
  ['pvp', 'Retro PvP & automation rules'],
  ['task-board', 'Task Board & Charm Points'],
  ['forge', 'Forge, Enchanting & upgrades'],
  ['content', 'Quests, bosses, raids & maps'],
  ['progression', 'Training, tokens & progression'],
  ['updates', '15.30 Lowrate changelog'],
  ['activity', 'Activity Signals'],
  ['record', 'Living Record'],
  ['faq', 'IglaOTS FAQ'],
  ['sources', 'What Public Sources Already Tell Us'],
  ['media', 'Public Screenshot and Media Sources'],
  ['listings', 'Matching Live Listings'],
  ['external-links', 'External Links'],
];

const referenceRows = [
  ['Official identity', 'Igła OTS / IglaOTS', 'The official wiki and FAQ use the IgłaOTS brand and describe a custom server ecosystem.'],
  ['Directory host', 'play.iglaots.net:7171', 'Primary public listing endpoint recorded by the directory inventory.'],
  ['Directory profile', '15.2 / PVP / x3', 'A dated discovery label; variant-specific official pages may carry different client and rate details.'],
  ['Players snapshot', '115 (911 unique IPs) / 2,000', 'Public directory snapshot associated with the IglaOTS listing.'],
  ['Uptime snapshot', '88.8%', 'Directory uptime signal; not a guarantee of current service availability.'],
  ['Country signal', 'Poland', 'Directory region field and archived owner-launch location context.'],
  ['Official current branding', '15.30 Retro PvP', 'Season FAQ and Lowrate changelog identify 15.30/153.20 and Retro PvP positioning.'],
  ['Variants', 'Season, Offseason, Lowrate', 'Variant identities are described by public official search results and wiki navigation; current variant status must be checked live.'],
  ['Premium', 'Automatic for joining players', 'Official FAQ says every player receives Premium automatically and content is not restricted by Premium status.'],
  ['Profile status', 'Source-backed; variant details need verification', 'Official wiki is accessible, while the main and variant sites were Cloudflare-protected in the reviewed capture.'],
];

const variantRows = [
  ['Season', 'Retro PvP / anti-cavebot identity', 'Cavebotting and multiclient abuse are prohibited in the official FAQ; exact current season URL and rates require live confirmation.'],
  ['Offseason', 'Retro PvP variant', 'Public search material associates Offseason with permitted cavebot usage, but its current FAQ was Cloudflare-protected in the reviewed capture. Verify the active rules.'],
  ['Lowrate', 'Retro PvP / 15.30 update', 'Official wiki documents an upcoming Lowrate Server beginning August 21, 2026 and extensive 15.30 content; live implementation should be checked.'],
  ['Directory row', '15.2 / PVP / x3', 'The OpenTibiaServers inventory maps `play.iglaots.net:7171` to IglaOTS and does not identify a variant.'],
  ['Archived launch record', 'Lowrate launch announcement', 'The community archive preserves an owner post by onewave1 describing a Lowrate launch at 21 August, 19:00 CEST; it is historical evidence, not current status.'],
];

const clientRows = [
  ['Account', 'Create an account on the official website, then manage it with the same email and password used to log in.'],
  ['Client', 'The FAQ says to download the official IglaOTS Client; the supplied FAQ does not expose a direct download URL.'],
  ['Supported platforms', 'The reviewed Igla Wiki FAQ does not state a complete platform list. Variant pages and the current download page should control this field.'],
  ['Account recovery', 'Lost access should be raised through the official Discord `#ask-gm-pl-en` channel according to the FAQ.'],
  ['Premium', 'Every joining player receives Premium automatically; the FAQ says access to content is not limited by Premium.'],
  ['Tools', 'Auto-loot and auto-Utito/other spell automation are described as currently allowed, while cavebotting, auto-refilling, and multiclient abuse remain prohibited.'],
  ['Safety', 'Do not share email passwords, recovery information, or payment data. Use official wiki, variant pages, and Discord rather than copied download links.'],
];

const pvpRows = [
  ['World identity', 'Retro PvP is the official Season/variant positioning; the public directory uses a generic PVP label.'],
  ['Cavebotting', 'Strictly prohibited in the official FAQ; account deletion is stated as a possible consequence.'],
  ['Auto-refilling', 'Prohibited according to the official FAQ.'],
  ['Multiclient abuse', 'Prohibited; the supplied FAQ does not define a universal numeric client limit.'],
  ['Auto-loot and auto-Utito', 'Currently described as allowed because script use can be difficult to prove; this is a source-specific allowance, not a general exemption.'],
  ['Trainer area', 'Non-PvP training area with exercise weapons, dummies, store trainers, and offline training.'],
  ['Reports', 'The FAQ directs account-help questions to Discord; use the active official support process for rule reports and evidence.'],
];

const taskRows = [
  ['Bronze', '40%', '54 Bounty Points', 'Adjusted from 65%; tier chance and reward are from the official Task Board page.'],
  ['Silver', '45%', '81 Bounty Points', 'Adjusted from 25%; tier chance and reward are from the official Task Board page.'],
  ['Gold', '15%', '108 Bounty Points', 'Adjusted from 10%; reward remains 108 Bounty Points.'],
];

const charmRows = [
  ['Beginner', 'Below 1,000 bestiary kills', 'No Charm Points shown'],
  ['Adept', '1,000 bestiary kills', '25 Charm Points'],
  ['Expert', '2,500 bestiary kills', '50 Charm Points'],
  ['Master', '5,000 bestiary kills', '100 Charm Points'],
];

const enchantingRows = [
  ['Tier 1', '90%', '18 Catalysts', '4,000,000 Gold Coins'],
  ['Tier 2', '65%', '26 Catalysts', '8,000,000 Gold Coins'],
  ['Tier 3', '45%', '34 Catalysts', '12,000,000 Gold Coins'],
  ['Tier 4', '30%', '34 Catalysts', '13,000,000 Gold Coins'],
  ['Tier 5', '20%', '36 Catalysts', '14,000,000 Gold Coins'],
];

const forgeRows = [
  ['Onslaught', 'Weapons', '60% extra damage on a fatal-hit trigger; trigger chance increased by 25%.'],
  ['Ruse', 'Armors', 'Chance to dodge an incoming attack; trigger chance increased by 50%.'],
  ['Momentum', 'Helmets', 'Every 2 seconds, chance to reduce all skill cooldowns by 2 seconds; trigger chance increased by 25%.'],
  ['Transcendence', 'Legs', 'Chance to activate Avatar Level 3 for 7 seconds while attacking; trigger chance increased by 25%.'],
];

const contentRows = [
  ['Quests', 'Most quests and hunting-ground access are generally unlocked, but the full quest must be completed to receive its reward. The official wiki exposes quest equipment guides.'],
  ['Custom bosses', 'Daily farmable custom bosses are available solo or with a team; exact names, schedules, and loot belong to the official wiki category.'],
  ['Nemesis bosses', 'Ferumbras, Orshabaal, Morgaroth, and Ghazbaran spawn every 7–14 days, with 5x real-Tibia damage and 100x real-Tibia experience.'],
  ['Personal boss loot', 'Every player has an individual chance at items, independent of damage dealt or received.'],
  ['Soul Collector', 'Soulhunter Azdarion in Thais provides a random corresponding-boss item after a set number of kills; exact thresholds are not stated in the FAQ.'],
  ['Raids', 'Most raids are reworked to spawn more monsters, and custom raids help players collect bestiary and charm points.'],
  ['Custom maps', 'The official wiki says three custom maps are accessible from a ship; Lowrate update notes add Targuna, Thalassara, and custom hunting grounds.'],
  ['Monsters', 'Approximately 99% of monsters are described as reworked, with changed attacks, loot, and behavior; special loot can be rarer than 1 in 2,500 kills.'],
];

const progressionRows = [
  ['Exercise weapons', '500 uses: 23 TC or 472,500 GP; 1,800 uses: 72 TC or 1,620,000 GP; 14,400 uses: 594 TC or 12,600,000 GP.'],
  ['Training dummies', 'North of Thais depot; exercise-weapon training provides 10% more skill.'],
  ['House trainers', 'Store-purchased trainers placed in a house provide a 20% training bonus.'],
  ['Offline training', 'Characters can gain skills while the player is away.'],
  ['Igla Tokens', 'NPC Nishat in the Adventurers Guild exchanges tokens for equipment, mounts, outfits, and Enchanting rewards.'],
  ['Loyalty Shop', 'A character receives Tokens for every hour online while the client is running; XP boosts are given as an example use.'],
  ['Blessings', '`!bless` or `!autobless` can be used in local chat; the FAQ says the cost does not exceed 120,000 GP.'],
  ['Wheel of Destiny', 'Unlockable at level 50 after purchasing promotion, allowing skill-point allocation.'],
  ['Global Charms', 'Life Leech, Mana Leech, and Critical Hit can apply to every monster once unlocked.'],
  ['Utamo Vita', 'Druids and Sorcerers can use energy rings and `Exana Vita`; the FAQ lists a 14-second Exana Vita cooldown.'],
];

const updateRows = [
  ['21 Aug 2026', 'Lowrate season start documented', 'Official wiki describes an upcoming Lowrate Server start; the public owner archive also preserves a 19:00 CEST launch announcement. Live implementation remains to be verified.'],
  ['15.30 update', 'Vocation and combat rework', 'Stances, Mana Buffer, spell changes, vocation balance, mitigation changes, new potions, and Wheel gem changes.'],
  ['15.30 PvE', 'Echo Raids and bosses', 'Portals, Influenced Monsters, Echo Wardens, eight new bosses, catalysts, Promotion Scrolls, and new amulets, helmets, and weapons.'],
  ['15.30 world expansion', 'Maps and hunting grounds', 'Targuna, Thalassara, Tecton areas, Ul’den, Ashkara, Estivia, Zah’din, and additional custom hunting grounds.'],
  ['15.30 progression', 'Weapons and items', 'Moonsilver helmets require level 800; Moonsilver and Stellar Moonsilver weapons require level 1000; vocation amulets require level 270.'],
  ['15.30 quality of life', 'Arcade and interface improvements', 'Minesweeper, Sudoku, Foosball, client/interface updates, and other quality-of-life changes.'],
];

const activityRows = [
  ['OpenTibiaServers listing', '115 (911 unique IPs) / 2,000', '88.8% uptime · x3 · PVP · 15.2', 'Dated public directory snapshot associated with play.iglaots.net:7171.'],
  ['Inventory record', '911 peak', 'play.iglaots.net:7171 · Poland · 15.2 · PVP', 'Separate inventory observation dated July 25, 2026.'],
  ['Offseason inventory endpoint', 'Not used for primary row', 'play.offseason.iglaots.net:7171', 'The inventory contains an additional IglaOTS endpoint; variant mapping and current activity require verification.'],
  ['Official Season FAQ widget', '131 online', 'Season website capture with x20 / x10 / x2 unlabeled', 'Separate variant snapshot; not synchronized with the directory count.'],
  ['Official Igła Wiki Discord widget', '630 online', 'FAQ/home-page widget at extraction', 'Community activity signal, not a game-world population count.'],
];

const mediaSources = [
  ['Igła Wiki home', 'https://wiki.iglaots.net/categories/home-page', 'Official navigation to systems, quests, monsters, bosses, custom maps, guides, and community links.'],
  ['IglaOTS Lowrate changelog', 'https://wiki.iglaots.net/categories/changelog', 'Official 15.30 vocation, boss, map, item, and progression update notes.'],
  ['IglaOTS Discord', 'https://discord.gg/VBBfBbaJSr', 'Official wiki-linked community and support channel; invite and online count can change.'],
  ['IglaOTS Twitch', 'https://www.twitch.tv/igla_ots', 'Official wiki-linked streaming channel.'],
  ['IglaOTS YouTube', 'https://www.youtube.com/@iglaots89', 'Official wiki-linked video channel.'],
  ['IglaOTS Facebook', 'https://www.facebook.com/iglaots/', 'Official wiki-linked social channel.'],
  ['IglaOTS Instagram', 'https://www.instagram.com/IglaOTS/', 'Official wiki-linked social channel.'],
  ['IglaOTS TikTok', 'https://www.tiktok.com/@iglaots', 'Official wiki-linked social channel.'],
  ['Archived owner launch record', 'https://opentibiaservers.com/', 'Historical launch post and player discussion; source quality and date should remain visible.'],
];

export default async function IglaotsWikiPage() {
  const directoryData = await fetchDirectoryServers({ page: 1, pageSize: 8, search: 'Iglaots', onlineOnly: false });
  const directoryServers = Array.isArray(directoryData?.servers) ? directoryData.servers.filter(Boolean) : [];
  const jsonLd = buildCuratedJsonLd(iglaotsPage);

  return (
    <main className="cyntara-wiki min-h-screen" data-server-slug="iglaots">
      {jsonLd.map((entry, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }} />)}

      <header className="cyntara-wiki__header">
        <h1>{iglaotsPage.h1}</h1>
        <small>From OpenTibiaServers Wiki, the primary Open Tibia server directory</small>
      </header>

      <div className="cyntara-wiki__grid">
        <article className="cyntara-wiki__content">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="min-w-0 flex-1">
              <p><strong><em><u>IglaOTS</u></em></strong> is a Polish <strong>Open Tibia server family</strong> built around <strong>Retro PvP</strong>, variant worlds, custom monsters, quests, bosses, tasks, Forge and Enchanting systems, Charms, Bestiary, tokens, and long-term equipment progression. Its official wiki presents a 15.30 Lowrate update stream, while the directory row currently identifies <code>play.iglaots.net:7171</code> as a 15.2 PvP x3 listing.</p>
              <p>This <strong><em>IglaOTS server guide</em></strong> separates Season, Offseason, Lowrate, official wiki, community archive, and directory evidence. That matters for searches like <strong>IglaOTS download</strong>, <strong>IglaOTS rates</strong>, <strong>IglaOTS Lowrate</strong>, <strong>IglaOTS Task Board</strong>, and <strong>IglaOTS players online</strong>: variant rules and snapshots can change independently.</p>
            </div>
            <div className="w-full shrink-0 md:w-64"><ServerLogo server={{ name: 'IglaOTS', slug: 'iglaots', host: 'iglaots.net' }} size="profile" /></div>
          </div>

          <nav className="cyntara-wiki__toc" aria-label="Table of Contents"><h2>Contents</h2><ol>{contents.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol></nav>

          <section id="overview">
            <SectionHeading>Overview &amp; variant identity</SectionHeading>
            <p>IglaOTS is not one flat server row. Its public ecosystem distinguishes <strong>Season</strong>, <strong>Offseason</strong>, and <strong>Lowrate</strong> identities, while the official wiki covers shared systems such as Task Board, Exaltation Forge, Enchanting, Bosstiary, Charms, custom bosses, raids, quests, custom maps, and token rewards.</p>
            <p>The accessible official FAQ describes the brand as a Retro PvP project, gives every joining player Premium automatically, and documents a nuanced automation policy: cavebotting, auto-refilling, and abusing multiclient are prohibited, while auto-loot and auto-Utito or other spell automation are described as currently allowed. The main and variant websites were Cloudflare-protected in the reviewed capture, so current variant rules must be verified before play.</p>
            <div className="cyntara-wiki__callout"><strong>Research limitation</strong><p>The official <a href="https://wiki.iglaots.net/categories/home-page" target="_blank" rel="nofollow noopener noreferrer">Igła Wiki</a> is accessible and supplies the detailed mechanics below. The main IglaOTS, Offseason, and Lowrate FAQ pages may require JavaScript and Cloudflare verification; this guide does not treat that blocked content as proof of current status.</p></div>
          </section>

          <section id="facts">
            <SectionHeading>Reference facts</SectionHeading>
            <p>This table is a compact <strong>IglaOTS server status</strong> record. Official mechanics, public listing values, and historical launch evidence remain separately attributed.</p>
            <Table headers={['Field', 'Recorded value', 'Evidence and context']} rows={referenceRows} />
          </section>

          <section id="variants">
            <SectionHeading>Season, Offseason &amp; Lowrate</SectionHeading>
            <p>Players searching for <strong><em>IglaOTS Lowrate</em></strong> or <strong>IglaOTS Offseason</strong> should choose the variant before assuming that cavebot, rates, client version, or launch status transfer across the network.</p>
            <Table headers={['Variant or record', 'Published identity', 'Evidence and caveat']} rows={variantRows} />
            <p>The official wiki’s current changelog is specifically framed around a Lowrate Server and 15.30 content. The directory row remains a 15.2 snapshot. This page preserves both because a client or rules page can move ahead of a server-list sync.</p>
          </section>

          <section id="client">
            <SectionHeading>Client, account &amp; safety</SectionHeading>
            <p>The official FAQ’s start flow is straightforward: create an account, download the official client, log in with email and password, and use the website for account management. It does not expose a direct download URL in the reviewed FAQ HTML, so the active variant’s official download page should take precedence.</p>
            <Table headers={['Area', 'Officially documented context']} rows={clientRows} />
            <ol><li>Start from the official <a href="https://wiki.iglaots.net/categories/home-page" target="_blank" rel="nofollow noopener noreferrer">Igła Wiki</a> or verified variant website.</li><li>Confirm whether the active destination is Season, Offseason, or Lowrate.</li><li>Create an account only through an operator-controlled account page.</li><li>Download the current client from the official page, not an archive attachment or mirror.</li><li>Read the active rules for automation, MC, PvP, payment, and account recovery before connecting.</li></ol>
            <div className="cyntara-wiki__callout"><strong>Credentials never belong in chat</strong><p>The official wiki FAQ directs recovery to Discord and the site warns users to use the official account path. Do not send passwords, recovery keys, or payment details to staff impersonators, bots, or community members.</p></div>
          </section>

          <section id="pvp">
            <SectionHeading>Retro PvP &amp; automation rules</SectionHeading>
            <p>The official Season identity is <strong><em><u>Retro PvP</u></em></strong>, while the public listing simplifies that to PVP. The FAQ adds the most important player-safety distinction: not all automation is treated identically, and variant rules may change.</p>
            <Table headers={['Rule area', 'Published official position']} rows={pvpRows} />
            <p>For PvP, players should verify the current variant’s frag, skull, protection, multiclient, cavebot, and event rules. The accessible FAQ does not provide a complete numeric skull table, so this guide does not borrow generic Retro PvP values from another server.</p>
          </section>

          <section id="task-board">
            <SectionHeading>Task Board &amp; Charm Points</SectionHeading>
            <p>The official <a href="https://wiki.iglaots.net/categories/task-board" target="_blank" rel="nofollow noopener noreferrer">Task Board</a> replaced Thomas the Hunter in the 15.20 update. It uses task rarity, Bounty Points, rerolls, preferred slots, delivery scaling, and Bestiary progress to turn hunting into a repeatable progression loop.</p>
            <Table headers={['Tier', 'IglaOTS task chance', 'Bounty Points', 'Source context']} rows={taskRows} />
            <div className="grid gap-4 md:grid-cols-3"><FactCard label="Weekly cycle" text="The Task Board cycle is shortened to 4 days; the exact reset time and timezone are not stated." /><FactCard label="Rerolls" text="New players start with 20 Reroll Tokens, the storage maximum; Bounty Tasks grant double Reroll Tokens." /><FactCard label="Preferred slots" text="New players start with 3 unlocked Preferred Slots so selected tasks can be retained while others are rerolled." /></div>
            <p>Charm Points are tied to each creature’s Task Difficulty Tier and Bestiary progress.</p>
            <Table headers={['Difficulty', 'Bestiary progress', 'Charm reward']} rows={charmRows} />
            <p>Delivery Task items are selected according to level, but the page does not provide the complete item pool, reroll cost, task-level requirements, or exact reset time. Use the live wiki before planning a task route.</p>
          </section>

          <section id="forge">
            <SectionHeading>Forge, Enchanting &amp; upgrades</SectionHeading>
            <p>IglaOTS has both a real-Tibia-inspired Forge and custom <strong>Enchanting</strong> and <strong>Exaltation Forge</strong> systems. The official wiki places the Enchanting Forge and transfer station in the Adventurer’s Guild and publishes exact Upgrade Crystal costs and chances.</p>
            <Table headers={['Crystal tier', 'Success chance', 'Catalysts', 'Gold Coins']} rows={enchantingRows} />
            <p>Enchanting bonuses vary by item category. The accessible guide documents spellbooks, shields, and quivers; it does not state what happens to equipment or materials after a failed upgrade.</p>
            <div className="grid gap-4 md:grid-cols-2"><div><h3>Published Enchanting examples</h3><ul><li>Spellbook: level 1 +100 max health; level 2 +1 magic level; level 4 +2% physical damage reduction; level 5 +2% Ruse.</li><li>Shield: level 1 +300 max health; level 2 +1 sword, axe, and club fighting; level 4 +2% physical damage reduction.</li><li>Quiver: tier 1 +200 max health; tier 2 +1 magic level; tier 4 +2% physical damage reduction.</li></ul></div><div><h3>Exaltation effects</h3><Table headers={['Effect', 'Slot', 'Published result']} rows={forgeRows} /></div></div>
            <p>Exaltation items use classifications 1–4 and tiers 0–10, with higher classifications allowing higher maximum tiers. Regular fusion requires two identical same-tier items, 100 Dust, gold, and optional Exalted Cores; the base success chance is 60%, with a maximum of 85% using cores. Convergence Fusion is guaranteed for eligible classification 3 and 4 items but costs more.</p>
            <div className="cyntara-wiki__callout"><strong>Destructive transfer warning</strong><p>Regular Tier Transfer destroys the source item, while Enchanting capacity transfer destroys the donor backpack and requires both backpacks to be empty. Confirm every live cost and result before pulling a lever.</p></div>
          </section>

          <section id="content">
            <SectionHeading>Quests, bosses, raids &amp; maps</SectionHeading>
            <p>The official FAQ and wiki describe a broad <strong>IglaOTS custom content</strong> layer: nearly all monsters were reworked, raids help Bestiary progress, custom bosses have personal loot, and new maps expand the hunting route.</p>
            <Table headers={['Content area', 'Source-backed details']} rows={contentRows} />
            <p>The official Wiki home links Custom Items, Custom Monsters, Custom Bosses, Quest, Monster Reference, New Maps, Soul Collector, and Movie Tutorials. It also lists three custom maps reachable from a ship. Detailed monster stats, quest rewards, boss schedules, and map routes should remain attached to their primary pages rather than inferred here.</p>
          </section>

          <section id="progression">
            <SectionHeading>Training, tokens &amp; progression</SectionHeading>
            <p>IglaOTS supports several onboarding and long-term progression routes beyond ordinary hunting. The FAQ documents starter training, currencies, rewards, charms, Bosstiary, Wheel of Destiny, and custom resource systems.</p>
            <Table headers={['System', 'Published player context']} rows={progressionRows} />
            <p>The FAQ names Soul War, Eldritch, Primal, and Naga items, plus custom monster drops and a Boss Hunting System. The exact item catalogue, token shop prices, Bestiary formula, and reward thresholds are maintained in the official wiki and may change with a season.</p>
          </section>

          <section id="updates">
            <SectionHeading>15.30 Lowrate changelog</SectionHeading>
            <p>The official <a href="https://wiki.iglaots.net/categories/changelog" target="_blank" rel="nofollow noopener noreferrer">Lowrate changelog</a> documents a large 15.30 update. Because the page frames the material around an upcoming Lowrate Server and the main site was protected during research, these entries are presented as documented update context—not proof that every item is active in the primary directory row.</p>
            <Table headers={['Date or release', 'Update area', 'Documented changes']} rows={updateRows} />
            <p>Notable class design includes Knight offensive/defensive stances, Paladin distance and Holy choices, Druid healing or elemental specialization, and Sorcerer Fire, Energy, and Death stances. The Mana Buffer gives Druids and Sorcerers an additional defensive resource with a two-second trigger interval and death if mana reaches zero.</p>
            <p>Lowrate update content also includes Echo Wardens, Promotion Scrolls, Targuna, Thalassara, Tecton hunting grounds, Moonsilver equipment, vocation amulets, mini-games, and Weapon Proficiency. Exact requirements for alternate weapon perks remain open in the official changelog.</p>
          </section>

          <section id="activity">
            <SectionHeading>Activity Signals</SectionHeading>
            <p>Players searching <strong><em>IglaOTS players online</em></strong> should compare source, variant, and capture date. Directory, variant FAQ, and Discord widgets are not one synchronized population metric.</p>
            <Table headers={['Source signal', 'Activity value', 'Profile context', 'Interpretation']} rows={activityRows} />
            <div className="cyntara-wiki__callout"><strong>Variant-aware activity reading</strong><p>The directory row uses play.iglaots.net and 15.2/PvP/x3. A separate Season capture shows 131 online and an unlabeled x20/x10/x2 panel. Keep those records separate until the operator maps endpoints and variants in a current source.</p></div>
          </section>

          <section id="record">
            <SectionHeading>Living Record</SectionHeading>
            <p>IglaOTS has a durable public history: archived owner-launch material, community discussion, a current official wiki, variant identities, and a 15.30 Lowrate update stream. The record is more useful when it preserves its evolution—from the 15.20 Task Board and earlier systems through new bosses, maps, class stances, and client variants—without flattening all seasons into one ruleset.</p>
            <div className="grid gap-4 md:grid-cols-3"><FactCard label="Core identity" text="Polish Retro PvP Open Tibia project with Season, Offseason, and Lowrate variants." /><FactCard label="Progression identity" text="Task Board, Bestiary, Charms, Forge, Enchanting, Bosstiary, custom bosses, raids, tokens, quests, and maps." /><FactCard label="Open documentation" text="Current variant mapping, exact rates, client downloads, complete rules, port/client alignment, and live population need current verification." /></div>
            <p>Owners and players can improve this <strong>IglaOTS wiki profile</strong> through the <Link href="/submit-server">claim and submission flow</Link>, <Link href="/community_archive">community archive</Link>, dated notes, and approved screenshots. A trustworthy record should keep launch announcements, player reports, and official corrections tied to their dates.</p>
          </section>

          <section id="faq">
            <SectionHeading>IglaOTS FAQ</SectionHeading>
            <div className="space-y-4">{iglaotsPage.faqs.map((faq) => <details key={faq.question} className="rounded border border-black bg-white p-4"><summary className="cursor-pointer text-base font-bold text-black">{faq.question}</summary><p className="mt-3 text-sm leading-7 text-black">{faq.answer}</p></details>)}</div>
          </section>

          <section id="sources">
            <SectionHeading>What Public Sources Already Tell Us</SectionHeading>
            <p>The official Igła Wiki provides the strongest accessible evidence for systems, task tiers, Forge mechanics, Enchanting, bosses, quests, charms, maps, commands, and the 15.30 Lowrate update. Official Season/variant pages add current identity and status signals where accessible, while the directory inventory and community archive provide dated host, activity, region, and launch context.</p>
            <div className="grid gap-3 md:grid-cols-2">{iglaotsPage.sourceLinks.slice(0, 13).map((source) => <SourceLink key={source.href} href={source.href} label={source.label} />)}</div>
            <div className="cyntara-wiki__callout"><strong>Evidence standard</strong><p>Current rates, variant rules, downloads, client versions, account recovery, PvP enforcement, token prices, boss schedules, and player counts should be tied to an official live page or dated operator announcement. When Cloudflare blocks a page or the wiki leaves a field open, this guide keeps it unconfirmed.</p></div>
          </section>

          <section id="media">
            <SectionHeading>Public Screenshot and Media Sources</SectionHeading>
            <p>Igła Wiki links official social channels, Discord, Twitch, YouTube, and player-made movie tutorials. The official update pages also document interface and content changes. This page links to those sources without mirroring external artwork and invites approved screenshots through the community surface.</p>
            <div className="grid gap-3 md:grid-cols-2">{mediaSources.map(([label, href, note]) => <SourceLink key={href} href={href} label={label} note={note} />)}</div>
          </section>

          <DirectoryRecommendation />

          <section id="listings">
            <SectionHeading>Matching Live Listings</SectionHeading>
            {directoryServers.length ? <div className="grid gap-3">{directoryServers.map((server) => <Link key={server.id || `${server.name}-${server.ip}`} href={`/servers/${buildServerSlug(server)}`} className="rounded border border-black bg-white p-4 hover:no-underline"><div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"><div><h3 className="text-base font-bold text-black">{server.name}</h3><p className="text-sm text-black">{server.host || server.ip || 'Host pending'} - {server.version || 'Unknown client'} - {server.world_type || 'World type pending'} - {server.location || 'Location pending'}</p></div><div className="text-sm font-bold text-black">{Number(server.players_online || 0).toLocaleString()} online</div></div></Link>)}</div> : <p>No matching listing is available in the current directory response.</p>}
          </section>

          <section id="external-links">
            <SectionHeading>External Links</SectionHeading>
            <ul>{iglaotsPage.sourceLinks.map((source) => <li key={source.href}><ExternalLink href={source.href}>{source.label}</ExternalLink></li>)}<li><ExternalLink href="https://evomanias.com">Evomanias - Recommended Open Tibia Server</ExternalLink></li></ul>
          </section>
        </article>

        <aside className="cyntara-wiki__sidebar">
          <div className="cyntara-wiki__infobox">
            <div className="cyntara-wiki__infobox-header">IglaOTS</div>
            <ServerLogo server={{ name: 'IglaOTS', slug: 'iglaots', host: 'iglaots.net' }} size="profile" />
            <table><tbody>
              <tr><th>Official identity</th><td>15.30 Retro PvP</td></tr>
              <tr><th>Variants</th><td>Season, Offseason, Lowrate</td></tr>
              <tr><th>Directory host</th><td><code>play.iglaots.net:7171</code></td></tr>
              <tr><th>Directory profile</th><td>x3 / PVP / 15.2</td></tr>
              <tr><th>Player signal</th><td>115 / 2,000</td></tr>
              <tr><th>Uptime signal</th><td>88.8%</td></tr>
              <tr><th>Region signal</th><td>Poland</td></tr>
              <tr><th>Premium</th><td>Automatic for joining players</td></tr>
              <tr><th>Task Board</th><td>Bronze, Silver, Gold; 4-day cycle</td></tr>
              <tr><th>Core systems</th><td>Forge, Enchanting, Charms, bosses, raids</td></tr>
              <tr><th>Current update</th><td>15.30 Lowrate changelog</td></tr>
              <tr><th>Profile status</th><td>Source-backed; variant details need verification</td></tr>
              <tr><th>Website</th><td><a href="https://iglaots.net/" target="_blank" rel="nofollow noopener noreferrer">iglaots.net</a></td></tr>
            </tbody></table>
          </div>

          <div className="cyntara-wiki__callout"><strong>Why This Page Exists</strong><p>To turn a time-sensitive <strong>IglaOTS server list</strong> row into a durable 15.30 guide for variants, PvP, Task Board, Forge, Enchanting, bosses, clients, rules, activity, and community history.</p><Link href="/submit-server">Claim or correct this listing</Link></div>

          <div className="rounded border border-gray-200 bg-white p-5"><h2 className="mb-3 text-base font-bold text-black">Related Directory Pages</h2><div className="flex flex-wrap gap-2"><Link href="/servers/demolidores" className="rounded border border-black px-3 py-2 text-sm font-semibold text-black hover:no-underline">Demolidores</Link><Link href="/servers/cyntara" className="rounded border border-black px-3 py-2 text-sm font-semibold text-black hover:no-underline">Cyntara</Link><Link href="/servers/rubinot" className="rounded border border-black px-3 py-2 text-sm font-semibold text-black hover:no-underline">RubinOT</Link><Link href="/servers/rexia" className="rounded border border-black px-3 py-2 text-sm font-semibold text-black hover:no-underline">Rexia</Link><Link href="/resources" className="rounded border border-black px-3 py-2 text-sm font-semibold text-black hover:no-underline">Resources</Link></div></div>

          <div className="rounded border border-gray-200 bg-white p-5"><h2 className="mb-3 text-base font-bold text-black">Search These Terms</h2><div className="flex flex-wrap gap-2">{iglaotsPage.keywords.slice(0, 8).map((keyword) => <Link key={keyword} href={`/?search=${encodeURIComponent(keyword)}`} className="rounded border border-black px-3 py-2 text-sm font-semibold text-black hover:no-underline">{keyword}</Link>)}</div></div>

          <div className="rounded border border-gray-200 bg-white p-5"><h2 className="mb-3 text-base font-bold text-black">Source trail</h2><ul className="space-y-3">{iglaotsPage.sourceLinks.map((source) => <li key={source.href}><ExternalLink href={source.href}>{source.label}</ExternalLink></li>)}</ul></div>
        </aside>
      </div>

      <KeywordPageCommunity pageSlug="iglaots" keyword="IglaOTS" />
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
