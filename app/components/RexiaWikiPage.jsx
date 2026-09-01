import Link from 'next/link';
import DirectoryRecommendation from '@/app/components/DirectoryRecommendation';
import KeywordPageCommunity from '@/app/components/KeywordPageCommunity';
import ServerLogo from '@/app/components/ServerLogo';
import { buildServerSlug } from '@/lib/server-paths';
import { buildCuratedJsonLd } from '@/lib/curated-pages';
import { fetchDirectoryServers } from '@/lib/directory-data';

export const rexiaPage = {
  slug: 'rexia',
  path: '/servers/rexia',
  type: 'server',
  title: 'Rexia 8.60 Server Guide: Rates, Reborn, PvP, Systems & Client',
  h1: 'Rexia: server status, rates, systems, and how to play',
  primaryKeyword: 'Rexia',
  keywords: [
    'Rexia',
    'Rexia server',
    'Rexia OT',
    'Rexia 8.60',
    'Rexia rates',
    'Rexia Reborn',
    'Rexia PvP',
    'Rexia tasks',
    'Rexia client download',
    'Rexia players online',
  ],
  metaDescription: 'Rexia 8.60 server guide covering official staged rates, Reborn requirements, level-200k PvP, tasks, instances, systems, markets, safe client links, activity, and community sources.',
  updatedAt: '2026-08-25',
  sourceLinks: [
    { label: 'Rexia official website', href: 'https://rexia.pl/' },
    { label: 'Rexia server information and rates', href: 'https://rexia.pl/?subtopic=serverinfo' },
    { label: 'Rexia FAQ / how to start', href: 'https://rexia.pl/?subtopic=help' },
    { label: 'Rexia official rules', href: 'https://rexia.pl/?subtopic=regulamin' },
    { label: 'Rexia systems catalog', href: 'https://rexia.pl/systems' },
    { label: 'Rexia Reborn System', href: 'https://rexia.pl/?subtopic=reborn' },
    { label: 'Rexia Addict System', href: 'https://rexia.pl/?subtopic=addict' },
    { label: 'Rexia Task System', href: 'https://rexia.pl/?subtopic=task' },
    { label: 'Rexia EXP guide', href: 'https://rexia.pl/?subtopic=exp' },
    { label: 'Rexia Instance System', href: 'https://rexia.pl/?subtopic=instance' },
    { label: 'Rexia downloads', href: 'https://rexia.pl/?subtopic=downloads' },
    { label: 'Rexia community forum', href: 'https://mrozuots.pl' },
    { label: 'Rexiopedia', href: 'https://rexiopedia.pl/' },
    { label: 'OpenTibiaServers directory', href: '/' },
  ],
  faqs: [
    {
      question: 'What is Rexia?',
      answer: 'Rexia.pl is an official Polish 8.60 Open Tibia server described as 4FUN RPG HIGH EXP EVO. The official site lists Windows, macOS, Android, iPhone, and iPad support, while the directory snapshot classifies the listing as Poland, FUN, 8.6, and x9999.',
    },
    {
      question: 'What are the official Rexia rates?',
      answer: 'The official Server Information page provides staged experience from 1500x at levels 1–1000 down to 1x above level 900,000, plus 50x skills, 25x magic, 2x loot, and spawn rate 10. The directory’s x9999 label is a separate listing snapshot and is not the full official rate table.',
    },
    {
      question: 'When does PvP begin on Rexia?',
      answer: 'The official FAQ and Server Information page state that PvP begins at level 200,000, with protection up to that level. The server information also lists a 30-second PZ lock, five-minute kill lock, five-minute white skull, one-day red skull, and three-person same-IP PvP restrictions.',
    },
    {
      question: 'How does Rexia Reborn work?',
      answer: 'Each Reborn requires level 717,217, empty equipment except for the permitted Blue Backpack, and the commands !reborn followed by !reborn tak. The official Reborn page lists nine Reborn tiers, +6% permanent damage per Reborn, additional requirements from the fourth tier, and access to harder content and rewards.',
    },
    {
      question: 'Is Rexia free to play?',
      answer: 'The official Server Information page labels the server premium as free and the FAQ states that VIP is free at level 50,000. Optional purchases such as premium points, subscriptions, store items, and market trades remain governed by the current official pages and rules.',
    },
    {
      question: 'How do I download Rexia safely?',
      answer: 'Create an account and choose the client for the device from Rexia’s official Downloads page. The official FAQ identifies Windows, macOS, Android, and test iOS support, and directs users to the official client path rather than copied installers or third-party mirrors.',
    },
    {
      question: 'Can players use bots or multiple clients on Rexia?',
      answer: 'The official FAQ says bot use is allowed and that multiple characters are allowed outside PvP. In PvP, using three or more characters from the same IP to kill, block, trap, or obstruct another player is prohibited, and VPN attempts are treated as one IP. The current rules remain the authority.',
    },
  ],
};

const contents = [
  ['overview', 'Overview & identity'],
  ['facts', 'Reference facts'],
  ['rates', 'Rates, stamina & progression'],
  ['reborn', 'Reborn system'],
  ['pvp', 'PvP, MC & rules'],
  ['systems', 'Official systems catalog'],
  ['tasks', 'Tasks, bosses & hunting'],
  ['client', 'Client, account & safety'],
  ['economy', 'Market, auctions & houses'],
  ['activity', 'Activity Signals'],
  ['record', 'Living Record'],
  ['faq', 'Rexia FAQ'],
  ['sources', 'What Public Sources Already Tell Us'],
  ['media', 'Public Screenshot and Media Sources'],
  ['listings', 'Matching Live Listings'],
  ['external-links', 'External Links'],
];

const referenceRows = [
  ['Official identity', 'Rexia.PL 8.60', 'The official Server Information page identifies the server as Rexia.PL 8.60.'],
  ['Official positioning', '4FUN RPG HIGH EXP EVO', 'The official site uses this description for the project’s game mode and search identity.'],
  ['Official host', 'REXIA.PL', 'The Server Information page lists the host but does not publish a port in the reviewed content.'],
  ['Directory host', 'rexia.pl:7171', 'The public directory inventory records the same domain with port 7171.'],
  ['Directory profile', 'x9999 / FUN / 8.6', 'A time-sensitive directory label; the official source provides a more detailed staged rate table.'],
  ['Players snapshot', '779 (779 unique IPs) / 1,545', 'Public directory snapshot associated with the Rexia listing.'],
  ['Uptime snapshot', '99.94%', 'Directory uptime signal captured with the listing; not an operator guarantee.'],
  ['Country signal', 'Poland', 'Directory region field and the official site’s Polish-language identity.'],
  ['Official progression', '1500x to 1x staged EXP', 'The official table ranges from levels 1–1000 through above 900,000.'],
  ['PvP activation', 'Level 200,000', 'Official FAQ and Server Information value; protection is stated up to 200k.'],
  ['Premium / VIP', 'Free / VIP from level 50k', 'Official Server Information and FAQ claims. Confirm current conditions in the live account panel.'],
  ['Reset policy', 'No character reset stated', 'Official information describes years of operation without a character reset.'],
];

const experienceRows = [
  ['1–1,000', '1500x'], ['1,001–5,000', '1400x'], ['5,001–10,000', '1300x'], ['10,001–20,000', '1200x'], ['20,001–30,000', '1100x'], ['30,001–50,000', '1000x'], ['50,001–75,000', '900x'], ['75,001–100,000', '800x'], ['100,001–150,000', '700x'], ['150,001–200,000', '600x'], ['200,001–250,000', '500x'], ['250,001–300,000', '400x'], ['300,001–350,000', '350x'], ['350,001–500,000', '300x'], ['500,001–600,000', '200x'], ['600,001–700,000', '100x'], ['700,001–717,000', '50x'], ['717,001–717,217', '10x'], ['717,218–900,000', '10x'], ['900,001+', '1x'],
];

const rebornRequirementRows = [
  ['1–3', 'No additional item requirement beyond level 717,217, empty EQ, and Blue Backpack', 'The official page presents these first three tiers without extra listed items.'],
  ['4', 'Fishing 10 · 50 Exp Coin · 150 Rexia Coin · 1 Rare Item', 'Target-tier requirements on the official Reborn page.'],
  ['5', 'Fishing 20 · 100 Exp Coin · 300 Rexia Coin · 1 Rare Item', 'Target-tier requirements on the official Reborn page.'],
  ['6', 'Fishing 40 · 200 Vampire Coin · 500 Jewelled Belt · 700 Rexia Coin · 10 Upgrade +30', 'Target-tier requirements on the official Reborn page.'],
  ['7', 'Fishing 50 · 500 Vampire Coin · 200 Bestiary Mask · 1,000 Rexia Coin', 'Target-tier requirements on the official Reborn page.'],
  ['8', 'Fishing 55 · 1,000 Vampire Coin · 400 Bestiary Mask · 200 Exp Coin · 2,000 Rexia Coin · 1 Private Isle · 100 Quest Key', 'Target-tier requirements on the official Reborn page.'],
  ['9', 'Fishing 60 · 1,500 Vampire Coin · 300 Exp Coin · 2,500 Rexia Coin · 15 Elite Coin · 200 Quest Key', 'Target-tier requirements on the official Reborn page.'],
];

const pvpRows = [
  ['PvP activation / protection', 'Begins at level 200,000; protection is stated up to 200k.'],
  ['Attack PZ lock', '30 seconds after attacking a player.'],
  ['Kill PZ lock', '5 minutes after killing a player. The !pz command checks the remaining time.'],
  ['White skull', '5 minutes.'],
  ['Red skull', '1 day.'],
  ['MC outside PvP', 'Multiple characters are allowed outside PvP according to the FAQ.'],
  ['MC in PvP', 'Three or more characters from one IP used to kill, block, trap, or obstruct another player are prohibited.'],
  ['VPN', 'Attempts to bypass the PvP same-IP rule with a VPN are treated as one IP.'],
  ['Casino limit', 'More than three characters per IP in the casino can lead to jail or a three-day ban first time, then permanent IP ban for a second offense.'],
  ['PvP Bless', 'The official site provides a separate PvP Bless page for cheaper blessings after player deaths; check live conditions.'],
];

const systemsRows = [
  ['Crit System', 'Develop critical chance and critical power.'],
  ['Speed System', 'Collect speed bonuses and improve mobility.'],
  ['Daily Login', 'Build a login streak and receive premium points.'],
  ['CAM System', 'Replay gameplay, analyze actions, and report errors.'],
  ['Subscription System', 'Bonuses to experience, loot, stamina regeneration, and more.'],
  ['PvP Bless', 'Cheaper blessings after death by another player.'],
  ['EXP Boost', 'Increase experience for a defined period.'],
  ['Reflect System', 'Reflect damage during combat.'],
  ['Quest Help', 'Earn rewards for helping other players.'],
  ['Cast System', 'Broadcast gameplay live.'],
  ['Worked Hours / Addict', 'Rewards tied to time spent in the game.'],
  ['Rice System', 'A production and income mechanic.'],
  ['Instance System', 'Procedurally generated team instances.'],
  ['NOLOSS EXP', 'No experience loss under specified conditions.'],
  ['MSG System', 'Additional damage and level progression through writing.'],
  ['Hunting Arenas', 'Organized PvE combat with rewards.'],
  ['Pet System', 'Acquire a companion for adventures.'],
  ['Flower System', 'Grow magical plants.'],
  ['Mine System', 'Extract resources and craft equipment.'],
  ['Fishing System', 'Fish for items and progression resources.'],
  ['Reborn System', 'Reset a character and continue with permanent bonuses.'],
  ['Building System', 'Build structures in the game world.'],
  ['Automatic Loot', 'Collect loot automatically.'],
  ['Meditation', 'Recover mana and energy while resting.'],
  ['Head Hunters', 'Hunt players with a bounty.'],
  ['Task System', 'Complete monster tasks for rewards.'],
  ['Points for Level', 'Strengthen a character through level milestones.'],
  ['Achievement System', 'Complete goals for damage bonuses and other rewards.'],
  ['War System', 'View active guild wars and detailed statistics.'],
];

const taskRows = [
  ['Mutated Rat', '200', '10 gold nuggets', '`!task mutated rat`'],
  ['Hydra Pro', '500', '100 gold nuggets; Transform Ring', '`!task Hydra Pro`'],
  ['Rotworm King', '500', '100 gold nuggets; Ninja Star', '`!task Rotworm King`'],
  ['Death Striker', '1,000', '100 gold nuggets; Firewalker Boots', '`!task Death Striker`'],
  ['Phyrus', '10,000', '100 gold nuggets; Super Mana Shield', '`!task Phyrus`'],
  ['EMO', '10,000', '100 gold nuggets; Super Health Shield', '`!task EMO`'],
  ['Dark Tortoise', '2,000', '100 gold nuggets; Damage AOL Amulet', '`!task Dark Tortoise`'],
  ['Big Sea Serpent', '5,000', '100 gold nuggets; Staminer', '`!task Big Sea Serpent`'],
  ['Ice Bitch', '5,000', '100 gold nuggets; Anni Helmet', '`!task Ice Bitch`'],
  ['Magister', '10,000', '100 gold nuggets; Dark Warrior Armor', '`!task Magister`'],
  ['Pro Swamp', '15,000', '100 gold nuggets; Ninja Armor', '`!task Pro Swamp`'],
  ['Zombi Cor', '2,000', '100 gold nuggets; Soul Armor', '`!task Zombi Cor`'],
  ['Bog Tanker', '5,000', '100 gold nuggets; Priest Armor', '`!task Bog Tanker`'],
  ['Dark Emo', '20,000', '100 gold nuggets; Silvers Legs', '`!task Dark Emo`'],
  ['Atlantis Guard', '2,000', '100 gold nuggets; Undead Boots Pro', '`!task Atlantis Guard`'],
  ['Squirrel', '10,000', '100 gold nuggets; Soul Boots', '`!task Squirrel`'],
  ['Dead Sheep', '5,000', '100 gold nuggets; Priest Rod', '`!task Dead Sheep`'],
  ['Dark Power Ranger', '5,000', '100 gold nuggets; Evil Master Staff', '`!task Dark Power Ranger`'],
  ['Achad', '25,000', '100 Dark Coin; Demon Backpack', '`!task Achad`'],
  ['Lizardox', '600', '6 Vampire Coin; Demonic Goat Outfit', '`!task Lizardox`'],
  ['Bestia', '500', '8 Vampire Coin; Gryphon Mount Outfit', '`!task Bestia`'],
  ['Nagini', '500', '10 Vampire Coin; Dark Dragon Outfit', '`!task Nagini`'],
  ['Death Dragonaus', '10,000', '10 Vampire Coin; Machete Outfit', '`!task Death Dragonaus`'],
  ['Cipcia', '100,000', '10 Vampire Coin; Cipcia Outfit', '`!task Cipcia`'],
];

const huntingRows = [
  ['Mutated Rat', '8+', 'Starter hunt; no extra access label shown.'],
  ['Hydra Pro', '2,000+', 'Early progression target.'],
  ['Rotworm King', '5,000+', 'Early progression target.'],
  ['Death Striker / Ropucha', '10,000+', 'Early progression targets.'],
  ['Phyrus / EMO / Elite Efreet', '50,000+', 'VIP-tagged locations or creatures.'],
  ['Dark Tortoise', '70,000+', 'VIP-tagged target.'],
  ['Big Sea Serpent', '250,000+', 'VIP-tagged target.'],
  ['Stone Pterodactyl', '400,000+', 'VIP-tagged target.'],
  ['Headhunter', '550,000+', 'ELITE-tagged target.'],
  ['Specter', '600,000+', 'VIP-tagged target.'],
  ['Puszek / Drakonix', '650,000+', 'LOST-tagged, profession-specific targets: ED/MS and RP/EK.'],
];

const economyRows = [
  ['Item Market', '`!wystaw nazwa,cena,ilość` lists an item for premium points; `!oferty` views offers; `!anuluj [id]` cancels; `!kup [id]` buys. Listed items lose upgrades, and Item Shop items cannot be listed.'],
  ['Character auctions', 'The official page shows character, profession, Reborn, remaining time, cost, and EP/PP badges. Login is required to buy; the supplied page does not specify a fee or transfer procedure.'],
  ['Character exchange', 'An official character-exchange path exists; use it instead of informal account trading and check the current rules before acting.'],
  ['Houses', 'The official site lists 70 free houses, 612 rented houses, and a 100k house purchase cost in Server Information. Inactive houses may be cleared after at least 14 days without login according to the FAQ.'],
  ['Guilds', 'The official Server Information page records 379 guilds and a 200k guild creation cost; the FAQ directs players through the official guild page.'],
  ['Real-money trading', 'The rules prohibit real-money trading of accounts, characters, houses, items, and points, and prohibit item exchanges between servers.'],
];

const activityRows = [
  ['OpenTibiaServers listing', '779 (779 unique IPs) / 1,545', '99.94% uptime · x9999 · FUN · 8.6', 'Dated public directory snapshot associated with rexia.pl:7171.'],
  ['Inventory record', '779 peak', 'rexia.pl:7171 · Poland · 8.6 · FUN', 'Separate inventory observation dated July 25, 2026.'],
  ['Official Server Information', 'No online number shown', 'Separate Who Is Online page is linked', 'Official page provides server facts but not a synchronized population number in the reviewed capture.'],
  ['Official homepage news', 'Current activity pages exposed', 'Results #44 and recent change #3038 shown', 'News and community activity are evidence of an active public site, not a player-count guarantee.'],
];

const mediaSources = [
  ['Rexia official homepage', 'https://rexia.pl/', 'Official branding, supported platforms, recent changes, social links, and community navigation.'],
  ['Rexia summer screenshot winner', 'https://rexia.pl/images/konkurs/wak1.png', 'Officially linked first-place screenshot from the #44 competition.'],
  ['Rexia summer screenshot runner-up', 'https://rexia.pl/images/konkurs/wak2.png', 'Officially linked second-place screenshot from the #44 competition.'],
  ['Rexia summer screenshot third place', 'https://rexia.pl/images/konkurs/wak3.png', 'Officially linked third-place screenshot from the #44 competition.'],
  ['Rexia Discord', 'https://discord.gg/wNyetRazbs', 'Official community invite linked by the official site; membership and availability can change.'],
  ['Rexia Facebook', 'https://www.facebook.com/rexiaots', 'Official social channel linked by the site; use dated posts as attributed context.'],
  ['Rexia Instagram', 'https://www.instagram.com/rexiapl/', 'Official social channel linked by the site.'],
  ['Rexia TikTok', 'https://www.tiktok.com/@rexiapl', 'Official social channel linked by the site.'],
];

export default async function RexiaWikiPage() {
  const directoryData = await fetchDirectoryServers({ page: 1, pageSize: 8, search: 'Rexia', onlineOnly: false });
  const directoryServers = Array.isArray(directoryData?.servers) ? directoryData.servers.filter(Boolean) : [];
  const jsonLd = buildCuratedJsonLd(rexiaPage);

  return (
    <main className="cyntara-wiki min-h-screen" data-server-slug="rexia">
      {jsonLd.map((entry, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }} />)}

      <header className="cyntara-wiki__header">
        <h1>{rexiaPage.h1}</h1>
        <small>From OpenTibiaServers Wiki, the primary Open Tibia server directory</small>
      </header>

      <div className="cyntara-wiki__grid">
        <article className="cyntara-wiki__content">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="min-w-0 flex-1">
              <p><strong><em><u>Rexia</u></em></strong>, officially presented as <strong>Rexia.PL 8.60</strong>, is a Polish <strong>Open Tibia server</strong> with a <strong>4FUN RPG HIGH EXP EVO</strong> identity. The official website lists Windows, macOS, Android, iPhone, and iPad support and publishes detailed staged progression, Reborn mechanics, tasks, instances, markets, account tools, and PvP rules.</p>
              <p>This <strong><em>Rexia server guide</em></strong> combines official source pages with the public directory snapshot. That matters for searches such as <strong>Rexia rates</strong>, <strong>Rexia 8.60</strong>, <strong>Rexia Reborn</strong>, <strong>Rexia PvP</strong>, and <strong>Rexia players online</strong>: the official table gives staged EXP from 1500x to 1x, while the directory row separately displays x9999 / FUN / 8.6.</p>
            </div>
            <div className="w-full shrink-0 md:w-64"><ServerLogo server={{ name: 'Rexia', slug: 'rexia', host: 'rexia.pl' }} size="profile" /></div>
          </div>

          <nav className="cyntara-wiki__toc" aria-label="Table of Contents"><h2>Contents</h2><ol>{contents.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol></nav>

          <section id="overview">
            <SectionHeading>Overview &amp; identity</SectionHeading>
            <p>Rexia is not a simple flat-rate listing. The official <a href="https://rexia.pl/?subtopic=serverinfo" target="_blank" rel="nofollow noopener noreferrer">Server Information</a> page describes a long high-experience curve that begins at 1500x and gradually reaches 1x above level 900,000. The FAQ then adds stamina thresholds, free VIP at level 50,000, level rewards, points for new players, Reborn progression, and a no-character-reset positioning.</p>
            <p>The world is designed around extreme long-term progression: characters can reach level 717,217 to perform a Reborn, unlock new areas and equipment, then continue through nine Reborn tiers. The official systems catalog adds tasks, hunting arenas, pets, fishing, mining, building, automatic loot, meditation, achievements, guild wars, and multiple trading systems.</p>
            <div className="cyntara-wiki__callout"><strong>Evidence boundary</strong><p>The official Rexia pages are the authority for mechanics, commands, rules, and supported clients. The directory is useful for discovery, host visibility, uptime, and a dated activity snapshot, but its x9999 / FUN label should not replace the official staged table.</p></div>
          </section>

          <section id="facts">
            <SectionHeading>Reference facts</SectionHeading>
            <p>These facts give players a compact <strong>Rexia server status</strong> reference while preserving the difference between operator-published settings and public-list observations.</p>
            <Table headers={['Field', 'Recorded value', 'Evidence and context']} rows={referenceRows} />
          </section>

          <section id="rates">
            <SectionHeading>Rates, stamina &amp; progression</SectionHeading>
            <p>The official Rexia rate page is a staged table rather than a single headline multiplier. Skills are listed at <strong>50x</strong>, magic at <strong>25x</strong>, loot at <strong>2x</strong>, and spawn rate at <strong>10</strong>. The experience stages below are transcribed from the official Server Information page.</p>
            <Table headers={['Character level', 'Official EXP']} rows={experienceRows} />
            <div className="grid gap-4 md:grid-cols-3"><FactCard label="Stamina baseline" text="The FAQ states a default 42-hour stamina pool, with one minute consumed per minute of experience gain." /><FactCard label="High stamina" text="Above 40 hours, the FAQ states 20% more default experience." /><FactCard label="Low stamina" text="Below 14 hours, the FAQ states 20% less default experience and no loot." /></div>
            <p>Stamina can be restored through the official Meditation System and a staminer. The FAQ also lists Gold Nuggets, Dark Coins, casino income, automatic loot from named monsters, fishing, and mining as progression or money-making routes. Because event bonuses can change, verify any current EXP boost in Rexia’s news, Discord, or official pages before planning a leveling route.</p>
          </section>

          <section id="reborn">
            <SectionHeading>Reborn system</SectionHeading>
            <p>The <a href="https://rexia.pl/?subtopic=reborn" target="_blank" rel="nofollow noopener noreferrer">official Reborn page</a> defines Rexia’s central endgame loop. Every Reborn requires exactly <strong>level 717,217</strong>, equipment removed, and only the permitted Blue Backpack. The player uses <code>!reborn</code>, confirms with <code>!reborn tak</code>, and is moved to the temple after success.</p>
            <Table headers={['Reborn tier', 'Additional requirements', 'Source context']} rows={rebornRequirementRows} />
            <div className="grid gap-4 md:grid-cols-3"><FactCard label="Permanent bonus" text="Each Reborn grants +6% damage. Nine tiers imply +54% if the bonus stacks linearly as described; the official page does not provide a separate cumulative table." /><FactCard label="Maximum" text="The official system lists Reborn 1 through 9. At nine, the command blocks further Reborn attempts." /><FactCard label="Guild support" text="!bonus reb reduces the Fishing requirement by five for online guild members for 24 hours." /></div>
            <p>Reborn retains the Reborn count, accesses, and permanent damage bonus while resetting the character’s level and starting HP/MP. It unlocks harder content, Dream Island, Lost Quests, gates, equipment requirements, rewards, and outfits. The official page does not specify the exact post-reset starting level or every auxiliary progression that resets, so those details remain open.</p>
          </section>

          <section id="pvp">
            <SectionHeading>PvP, MC &amp; rules</SectionHeading>
            <p>Rexia’s PvP identity begins late in progression: the official FAQ says <strong><em><u>PvP starts at level 200,000</u></em></strong>, with protection up to 200k. The server-information page and FAQ document short combat timers, and the rules add specific restrictions for same-IP characters in PvP and the casino.</p>
            <Table headers={['Rule area', 'Officially documented position']} rows={pvpRows} />
            <p>The official <a href="https://rexia.pl/?subtopic=regulamin" target="_blank" rel="nofollow noopener noreferrer">rules</a> prohibit exploiting or hiding server bugs, impersonating staff or players, harmful conduct, spam, obstruction, personal-data disclosure, false evidence, real-money trading, cross-server item exchanges, and other conduct that harms the service. Reports use <code>Ctrl + R</code>, and appeals belong on the official forum with evidence.</p>
            <div className="cyntara-wiki__callout"><strong>Bot and multi-client nuance</strong><p>The FAQ says bot use is permitted and MC outside PvP is allowed, but that does not override the specific PvP, casino, exploit, account, and conduct rules. Treat the current Polish rules page as the controlling source if a copied guide conflicts with it.</p></div>
          </section>

          <section id="systems">
            <SectionHeading>Official systems catalog</SectionHeading>
            <p>Rexia publishes a broad <strong>systems catalog</strong> rather than only a rate table. The descriptions below are translated summaries of the official system cards; detailed requirements and rewards belong to each linked page.</p>
            <Table headers={['System', 'Officially described purpose']} rows={systemsRows} />
            <p>Several systems form a connected progression loop: Daily Login and Worked Hours produce premium-point incentives; Crit, Speed, Reflect, Points for Level, and Achievements influence character building; Reborn, Tasks, Instances, Hunting Arenas, Fishing, Mine, Flower, Pet, Building, and Automatic Loot create activities beyond ordinary hunting.</p>
            <p>Use the official <a href="https://rexia.pl/systems" target="_blank" rel="nofollow noopener noreferrer">Systems page</a> and <a href="https://rexiopedia.pl/" target="_blank" rel="nofollow noopener noreferrer">Rexiopedia</a> for exact item names and current mechanics. This guide intentionally does not convert short marketing descriptions into undocumented drop rates or requirements.</p>
          </section>

          <section id="tasks">
            <SectionHeading>Tasks, bosses &amp; hunting</SectionHeading>
            <p>The <a href="https://rexia.pl/?subtopic=task" target="_blank" rel="nofollow noopener noreferrer">Task System</a> is command-based. Use <code>!task info</code> to check the current task, <code>!task off</code> to cancel it, and activate a task with the displayed monster name. The official page does not state a cooldown, simultaneous-task limit, or whether kills before activation count.</p>
            <Table headers={['Monster', 'Required kills', 'Published reward', 'Activation command']} rows={taskRows} />
            <p>The task table uses literal monster names and command capitalization. It includes the early Transform Ring route through Hydra Pro, equipment rewards, Gold Nuggets, Dark Coins, Vampire Coins, outfits, and late creatures such as Cipcia. Confirm the live task page before treating any reward or repeatability assumption as current.</p>
            <h3>Official EXP guide</h3>
            <p>The official <a href="https://rexia.pl/?subtopic=exp" target="_blank" rel="nofollow noopener noreferrer">EXP guide</a> marks recommended creatures with approximate minimum levels, not guaranteed thresholds. VIP, ELITE, and LOST labels identify access context, while Puszek and Drakonix are assigned to different vocation groups.</p>
            <Table headers={['Creature or route', 'Approximate minimum', 'Access context']} rows={huntingRows} />
            <h3>Boss and access notes</h3>
            <p>The FAQ documents daily global bosses at 20:00 and 20:30, a Daily Boss on Hades for a 400k–710k group of four, and access guides for Hades, Atlantis, ELITE, and LOST. Gold City contains three hourly bosses with rewards such as Exp Elixir, Komornik, and Staminer. Exact schedules, teleport states, requirements, and loot should be verified in game.</p>
          </section>

          <section id="client">
            <SectionHeading>Client, account &amp; safety</SectionHeading>
            <p>Rexia’s official FAQ provides a clear start path: <strong>create an account</strong>, download the client for the device, create a character, log in, review the EXP guide, and explore the systems. The Downloads page offers Windows, macOS, Android, test iOS, and 32-bit Android options according to the FAQ.</p>
            <ol>
              <li>Register through the official <a href="https://rexia.pl/?subtopic=createaccount" target="_blank" rel="nofollow noopener noreferrer">Create Account</a> page.</li>
              <li>Use the official <a href="https://rexia.pl/?subtopic=downloads" target="_blank" rel="nofollow noopener noreferrer">Downloads</a> page for the matching operating system.</li>
              <li>Keep the official update and support path; do not use copied installers or random mirrors.</li>
              <li>Enable 2FA in the account panel and protect the one-use recovery key.</li>
              <li>Report violations with <code>Ctrl + R</code> and include truthful evidence.</li>
            </ol>
            <div className="cyntara-wiki__callout"><strong>Account safety</strong><p>The FAQ says not to share passwords, 2FA codes, or recovery keys, and the site assistant warns that it may be wrong and should never receive login details. The rules state that administration does not restore items lost through hacking, crashes, or server errors, so prevention matters.</p></div>
          </section>

          <section id="economy">
            <SectionHeading>Market, auctions &amp; houses</SectionHeading>
            <p>Rexia provides several operator-controlled trade routes. A <strong><em>Rexia market</em></strong> player can list items for premium points, while character auctions expose profession, Reborn, remaining time, cost, and EP/PP labels. Exact fees and transfer behavior are not fully stated on every page, so players should inspect the live offer before paying.</p>
            <Table headers={['Area', 'Published mechanics and safety context']} rows={economyRows} />
            <p>The official rules prohibit real-money trading of accounts, characters, houses, items, and points, and prohibit cross-server item exchanges. Informal dice games, private transfers, SMS trades, and trusting another player are explicitly described as the player’s own risk. Use the official market or auction interface whenever it supports the transaction.</p>
          </section>

          <section id="activity">
            <SectionHeading>Activity Signals</SectionHeading>
            <p>Players searching <strong><em>Rexia online</em></strong> should compare the measurement behind each number. The directory row reports 779 players and 99.94% uptime, while the official Server Information page provides a separate Who Is Online route without embedding a synchronized count in the reviewed page.</p>
            <Table headers={['Source signal', 'Activity value', 'Profile context', 'Interpretation']} rows={activityRows} />
            <div className="cyntara-wiki__callout"><strong>Snapshot, not promise</strong><p>Directory counts and uptime are time-sensitive observations. Official news, rankings, guilds, recent deaths, and the Who Is Online page can add current context, but none should be read as a permanent guarantee of queue time, market liquidity, or population.</p></div>
          </section>

          <section id="record">
            <SectionHeading>Living Record</SectionHeading>
            <p>Rexia’s public record spans years of Polish Open Tibia community history, a 2013 owner-launch record in the community archive, current official mechanics, and a continuously updated website. The dated evidence shows a project with a high-level long-term loop rather than a one-week launch page: staged experience, no character reset, Reborn tiers, accounts, rules, public rankings, community channels, and recent screenshot competitions.</p>
            <div className="grid gap-4 md:grid-cols-3"><FactCard label="Core identity" text="Polish 8.60 4FUN RPG HIGH EXP EVO server with multi-platform client support." /><FactCard label="Progression identity" text="Level 717,217 Reborn threshold, nine tiers, +6% damage per tier, tasks, instances, and late-game access gates." /><FactCard label="Open documentation" text="Exact client build, port, detailed item catalogue, some system requirements, and live online count require current source verification." /></div>
            <p>Owners and players can improve this <strong>Rexia wiki profile</strong> through the <Link href="/submit-server">claim and submission flow</Link>, the <Link href="/community_archive">community archive</Link>, dated notes, and screenshots. Preserve old launch evidence while attaching current rules, changelogs, and corrections to the date they became true.</p>
          </section>

          <section id="faq">
            <SectionHeading>Rexia FAQ</SectionHeading>
            <div className="space-y-4">{rexiaPage.faqs.map((faq) => <details key={faq.question} className="rounded border border-black bg-white p-4"><summary className="cursor-pointer text-base font-bold text-black">{faq.question}</summary><p className="mt-3 text-sm leading-7 text-black">{faq.answer}</p></details>)}</div>
          </section>

          <section id="sources">
            <SectionHeading>What Public Sources Already Tell Us</SectionHeading>
            <p>The official Rexia website, Server Information page, FAQ, rules, systems catalog, Reborn guide, Addict page, Task page, EXP guide, Instance page, downloads, forum, and Rexiopedia together provide unusually strong source coverage. The directory inventory adds a dated host, uptime, region, and player snapshot; the community archive preserves launch-history context.</p>
            <div className="grid gap-3 md:grid-cols-2">{rexiaPage.sourceLinks.slice(0, 11).map((source) => <SourceLink key={source.href} href={source.href} label={source.label} />)}</div>
            <div className="cyntara-wiki__callout"><strong>Evidence standard</strong><p>Current rules, prices, client files, bans, player counts, events, reward values, and account procedures should be tied to a live official page or dated operator announcement. When the official page does not state a port, world list, fee, or exact formula, this guide leaves it open instead of guessing.</p></div>
          </section>

          <section id="media">
            <SectionHeading>Public Screenshot and Media Sources</SectionHeading>
            <p>Rexia’s homepage links official social channels and a screenshot competition. These sources are useful for attributed visual context, community activity, and historical posts, but this page does not mirror artwork without permission. Open the source pages directly or submit approved screenshots through the community surface.</p>
            <div className="grid gap-3 md:grid-cols-2">{mediaSources.map(([label, href, note]) => <SourceLink key={href} href={href} label={label} note={note} />)}</div>
          </section>

          <DirectoryRecommendation />

          <section id="listings">
            <SectionHeading>Matching Live Listings</SectionHeading>
            {directoryServers.length ? <div className="grid gap-3">{directoryServers.map((server) => <Link key={server.id || `${server.name}-${server.ip}`} href={`/servers/${buildServerSlug(server)}`} className="rounded border border-black bg-white p-4 hover:no-underline"><div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"><div><h3 className="text-base font-bold text-black">{server.name}</h3><p className="text-sm text-black">{server.host || server.ip || 'Host pending'} - {server.version || 'Unknown client'} - {server.world_type || 'World type pending'} - {server.location || 'Location pending'}</p></div><div className="text-sm font-bold text-black">{Number(server.players_online || 0).toLocaleString()} online</div></div></Link>)}</div> : <p>No matching listing is available in the current directory response.</p>}
          </section>

          <section id="external-links">
            <SectionHeading>External Links</SectionHeading>
            <ul>{rexiaPage.sourceLinks.map((source) => <li key={source.href}><ExternalLink href={source.href}>{source.label}</ExternalLink></li>)}<li><ExternalLink href="https://evomanias.com">Evomanias - Recommended Open Tibia Server</ExternalLink></li></ul>
          </section>
        </article>

        <aside className="cyntara-wiki__sidebar">
          <div className="cyntara-wiki__infobox">
            <div className="cyntara-wiki__infobox-header">Rexia.PL</div>
            <ServerLogo server={{ name: 'Rexia', slug: 'rexia', host: 'rexia.pl' }} size="profile" />
            <table><tbody>
              <tr><th>Official version</th><td>8.60</td></tr>
              <tr><th>Official mode</th><td>4FUN RPG HIGH EXP EVO</td></tr>
              <tr><th>Official host</th><td><code>REXIA.PL</code></td></tr>
              <tr><th>Directory host</th><td><code>rexia.pl:7171</code></td></tr>
              <tr><th>Directory profile</th><td>x9999 / FUN / 8.6</td></tr>
              <tr><th>Player signal</th><td>779 / 1,545</td></tr>
              <tr><th>Uptime signal</th><td>99.94%</td></tr>
              <tr><th>PvP activation</th><td>Level 200,000</td></tr>
              <tr><th>Reborn threshold</th><td>Level 717,217</td></tr>
              <tr><th>Reborn limit</th><td>9 tiers</td></tr>
              <tr><th>Core systems</th><td>Tasks, Reborn, instances, market, auctions, Addict</td></tr>
              <tr><th>Platforms</th><td>Windows, macOS, Android, iOS test</td></tr>
              <tr><th>Website</th><td><a href="https://rexia.pl/" target="_blank" rel="nofollow noopener noreferrer">rexia.pl</a></td></tr>
            </tbody></table>
          </div>

          <div className="cyntara-wiki__callout"><strong>Why This Page Exists</strong><p>To turn a time-sensitive <strong>Rexia server list</strong> row into a durable 8.60 guide for rates, Reborn, PvP, tasks, clients, systems, rules, screenshots, and community history.</p><Link href="/submit-server">Claim or correct this listing</Link></div>

          <div className="rounded border border-gray-200 bg-white p-5"><h2 className="mb-3 text-base font-bold text-black">Related Directory Pages</h2><div className="flex flex-wrap gap-2"><Link href="/servers/demolidores" className="rounded border border-black px-3 py-2 text-sm font-semibold text-black hover:no-underline">Demolidores</Link><Link href="/servers/cyntara" className="rounded border border-black px-3 py-2 text-sm font-semibold text-black hover:no-underline">Cyntara</Link><Link href="/servers/rubinot" className="rounded border border-black px-3 py-2 text-sm font-semibold text-black hover:no-underline">RubinOT</Link><Link href="/servers/amonot" className="rounded border border-black px-3 py-2 text-sm font-semibold text-black hover:no-underline">AmonOT</Link><Link href="/resources" className="rounded border border-black px-3 py-2 text-sm font-semibold text-black hover:no-underline">Resources</Link></div></div>

          <div className="rounded border border-gray-200 bg-white p-5"><h2 className="mb-3 text-base font-bold text-black">Search These Terms</h2><div className="flex flex-wrap gap-2">{rexiaPage.keywords.slice(0, 8).map((keyword) => <Link key={keyword} href={`/?search=${encodeURIComponent(keyword)}`} className="rounded border border-black px-3 py-2 text-sm font-semibold text-black hover:no-underline">{keyword}</Link>)}</div></div>

          <div className="rounded border border-gray-200 bg-white p-5"><h2 className="mb-3 text-base font-bold text-black">Source trail</h2><ul className="space-y-3">{rexiaPage.sourceLinks.map((source) => <li key={source.href}><ExternalLink href={source.href}>{source.label}</ExternalLink></li>)}</ul></div>
        </aside>
      </div>

      <KeywordPageCommunity pageSlug="rexia" keyword="Rexia" />
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
