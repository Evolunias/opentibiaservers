import Link from 'next/link';
import DirectoryRecommendation from '@/app/components/DirectoryRecommendation';
import KeywordPageCommunity from '@/app/components/KeywordPageCommunity';
import ServerLogo from '@/app/components/ServerLogo';
import { buildServerSlug } from '@/lib/server-paths';
import { buildCuratedJsonLd } from '@/lib/curated-pages';
import { fetchDirectoryServers } from '@/lib/directory-data';

export const paulistinhaotPage = {
  slug: 'paulistinhaot',
  path: '/servers/paulistinhaot',
  type: 'server',
  title: 'PaulistinhaOT Server Guide: Worlds, PvP, Updates & Client',
  h1: 'PaulistinhaOT: server status, worlds, how to play, and community',
  primaryKeyword: 'PaulistinhaOT',
  keywords: [
    'PaulistinhaOT',
    'PaulistinhaOT server',
    'PaulistinhaOT Global Servers',
    'PaulistinhaOT Arkadia',
    'PaulistinhaOT Dominium',
    'PaulistinhaOT Lordebra',
    'PaulistinhaOT Deletera',
    'PaulistinhaOT 15.30',
    'PaulistinhaOT players online',
  ],
  metaDescription: 'PaulistinhaOT server guide covering Deletera, Lordebra and Arkadia worlds, PvP modes, 15.30 updates, task systems, Targuna, safe client links, and live listing context.',
  updatedAt: '2026-07-26',
  sourceLinks: [
    { label: 'PaulistinhaOT official website', href: 'https://paulistinhaot.com/' },
    { label: 'PaulistinhaOT worlds', href: 'https://paulistinhaot.com/?subtopic=worlds' },
    { label: 'PaulistinhaOT server information', href: 'https://paulistinhaot.com/?subtopic=serverinfo' },
    { label: 'PaulistinhaOT news and updates', href: 'https://paulistinhaot.com/?subtopic=news' },
    { label: 'PaulistinhaOT official rules', href: 'https://paulistinhaot.com/?subtopic=rules' },
    { label: 'PaulistinhaOT downloads', href: 'https://paulistinhaot.com/?subtopic=downloads' },
    { label: 'PaulistinhaOT event calendar', href: 'https://paulistinhaot.com/?subtopic=eventcalendar' },
    { label: 'OpenTibiaServers directory', href: '/' },
  ],
  faqs: [
    {
      question: 'What is PaulistinhaOT?',
      answer: 'PaulistinhaOT, also presented as PaulistinhaOT Global Servers, is a Brazilian multiworld Open Tibia network. Its public worlds page currently lists Deletera as Retro Open PvP, Lordebra as Optional PvP, and Arkadia as Open PvP with the PTC client requirement.',
    },
    {
      question: 'Which PaulistinhaOT worlds are currently listed?',
      answer: 'The reviewed official worlds page lists Deletera, Lordebra, and Arkadia. Dominium appears in historical launch news but not in the current worlds table reviewed for this guide, so it is preserved as historical context rather than presented as a current world.',
    },
    {
      question: 'What are the PaulistinhaOT rates?',
      answer: 'The OpenTibiaServers snapshot labels PaulistinhaOT x90, PVP, and client 15.2, with 742 players out of a listed 2,000 and 99.42% uptime. The official server-info page requires a world selection before showing detailed rates, so those directory values should be treated as time-sensitive snapshot data rather than a complete global rate table.',
    },
    {
      question: 'What is different about Arkadia, Lordebra, and Deletera?',
      answer: 'The official worlds page identifies Arkadia as Open PvP and Only PTC, Lordebra as Optional PvP with dual-client support, and Deletera as Retro Open PvP with dual-client support. World populations, launch events, restrictions, and systems can change, so use the official world and server-info pages before choosing.',
    },
    {
      question: 'What did the PaulistinhaOT 15.30 update add?',
      answer: 'The official July 23, 2026 news entry describes Summer Update 15.30 with new systems, quests, bosses, and equipment. Its detailed update notes mention Shards of a Broken Moon, Make Believe, scalable bosses, Moonsilver equipment, Weapon Proficiency, Eco Raids, Echo Guardians, and Discovery improvements.',
    },
    {
      question: 'How do I download the PaulistinhaOT client safely?',
      answer: 'Use the official PaulistinhaOT Downloads page linked from paulistinhaot.com and create an account through the official account route. The reviewed download page does not state the client filename, operating system, checksum, or installation requirements, so third-party mirrors and copied launchers should not be treated as official.',
    },
  ],
};

const contents = [
  ['overview', 'Overview & network identity'],
  ['facts', 'Reference facts'],
  ['worlds', 'Worlds & PvP modes'],
  ['systems', 'Systems, tasks & progression'],
  ['updates', 'Updates, quests & equipment'],
  ['rules', 'Rules, client & account safety'],
  ['activity', 'Activity Signals'],
  ['record', 'Living Record'],
  ['faq', 'PaulistinhaOT FAQ'],
  ['sources', 'What Public Sources Already Tell Us'],
  ['media', 'Public Screenshot and Media Sources'],
  ['listings', 'Matching Live Listings'],
  ['external-links', 'External Links'],
];

const referenceRows = [
  ['Network name', 'PaulistinhaOT Global Servers', 'The official homepage and news identify a multiworld network operated under the PaulistinhaOT brand.'],
  ['Official domain', 'paulistinhaot.com', 'Use the operator-controlled site for worlds, account creation, downloads, rules, news, and support links.'],
  ['Directory host', 'deletera.paulistinhaot.com:7171', 'The primary public listing snapshot uses the Deletera endpoint. Other world endpoints are recorded separately below.'],
  ['Listing title', 'Paulistinhaot', 'Name shown by the public directory source; the official brand uses PaulistinhaOT.'],
  ['Directory profile', '15.2 / PVP / x90', 'A time-sensitive listing label. Official detailed rates require selecting a world on the server-info page.'],
  ['Players snapshot', '742 (742 unique IPs) / 2,000', 'Public directory snapshot associated with the primary row; not a guarantee of current activity or capacity.'],
  ['Uptime snapshot', '99.42%', 'Public directory uptime signal captured with the listing.'],
  ['Country signal', 'Brazil', 'Directory region field; the official worlds page labels its listed locations as South America.'],
  ['Source rank', '#160', 'Rank value retained from the directory source capture, not a permanent quality score.'],
  ['Claim status', 'Unclaimed until verified', 'Owner or manager confirmation is still needed for official profile corrections and additions.'],
  ['Open fields', 'Vocations, items, monsters', 'No complete source-backed catalogue for these areas was found in the reviewed public material.'],
];

const worldRows = [
  ['Deletera', 'Retro Open PvP', 'Dual Client', '77 online', 'South America; the official tooltip says dual clients are accepted.'],
  ['Lordebra', 'Optional PvP', 'Dual Client', '78 online', 'South America; the official tooltip says dual clients are accepted.'],
  ['Arkadia', 'Open PvP', 'Only PTC', '7 online', 'South America; the page marks the extra-information field as “blocked” without explaining that status.'],
  ['Dominium', 'Retro-PvP in launch news', 'Not confirmed on current worlds page', 'Historical record', 'The current worlds table reviewed does not list Dominium, so its launch identity is preserved as historical context.'],
];

const launchRows = [
  ['Arkadia', 'July 7 at 19:00', 'Open-PvP Only PTC', 'Fresh start, Roulette System, Mystery Bag, Rush das Lendas through August 6', 'The launch announcement does not consistently repeat the year; the surrounding news context is 2026.'],
  ['Dominium', 'March 5', 'Retro-PvP', 'Fresh start, strategic opening, Rush das Lendas, no Roulette or Mystery Bag for the first 30 days', 'Historical launch announcement; not present in the current worlds table reviewed.'],
  ['Lordebra', 'January 7', 'Optional PvP', 'Long-term world, opening bonus for the first 1,000 characters, Exercise Weapon and 3 VIP days', 'The announcement leaves the year unstated and described account creation as coming soon at publication.'],
];

const systemRows = [
  ['Task System', 'Reward Tasks and Weekly Tasks use a Task Board with experience, reroll tokens, reward points, talisman progression, preferred/avoided creatures, rotating kill and delivery objectives, titles, achievements, and an expanded shop.'],
  ['Roulette System', 'Named as an Arkadia launch system and temporarily excluded from Dominium’s first 30 days according to the launch announcement.'],
  ['Mystery Bag', 'Available from Arkadia’s first day and held back during Dominium’s initial 30-day competitive phase.'],
  ['Weapon Proficiency', 'Summer Update feature allowing players to modify up to two advantage slots on each weapon by replacing, refining, maximizing, or reshaping effects.'],
  ['Eco Raids', 'Creatures can become echoes and trigger optional encounters; rare Echo Guardians strengthen nearby enemies and add reward-focused challenges.'],
  ['Discovery', 'The improved system automatically activates subareas and grants additional movement speed as the player’s overall exploration progress increases.'],
  ['VIP and loyalty', 'Both are listed in the official library navigation; detailed benefits should be checked on the current account and server pages.'],
  ['Character auctions', 'The official navigation exposes current auctions, auction history, bids, watched auctions, and player-created auctions.'],
];

const updateRows = [
  ['July 23, 2026', 'Summer Update 15.30', 'New systems, quests, bosses, equipment, Shards of a Broken Moon, Make Believe, Moonsilver, Weapon Proficiency, Eco Raids, and Discovery improvements.'],
  ['June 19, 2026', 'Version 15.25', 'Vocation balancing; players were told to close and reopen the client through the launcher.'],
  ['March 31, 2026', 'Version 15.24', 'New Targuna island and its associated features; launcher restart required.'],
  ['March 13, 2026', 'Orcsoberfest', 'Event island access south of Thais, activities through March 20, and a later +50% Demon-class creature XP period.'],
  ['December 21, 2025', 'Winter Update', 'Ordem do Cervo, Roost of the Graveborn, equipment, weapons, mount, outfit, achievements, spell opacity, object selection, multi-action buttons, and Reward/Weekly Tasks.'],
];

const rulesRows = [
  ['Automation', 'Full PvE/PvP automation, bots, macros, autoclickers, hacks, unauthorized modifications, and information advantages are prohibited. PTC-specific rules may carry immediate or permanent bans.'],
  ['Training tolerance', 'The rules describe a limited tolerance for 100% automation in training moments such as exercise weapons, trainer cabins, and magic-level training; do not extend that exception to hunting or PvP.'],
  ['PvP multiclienting', 'Multiple clients are strictly prohibited in PvP for chasing, initiating combat, supporting characters, blocking passages, or interfering.'],
  ['IP limits', 'The rules state a four-client general limit, a two-character hunting/farm statement, and a stricter one-character hunting/boss statement; the apparent conflict should be resolved with staff before play.'],
  ['Penalties', 'Character-limit offenses list escalating 7-day, 15-day, 30-day, then permanent bans; the rules also describe jail for same-IP characters and sanctions without prior warning.'],
  ['Bazaar', 'Character buying, selling, and trading must use the official Bazaar; off-platform real-money or other payment arrangements are prohibited.'],
  ['Account checks', 'Players must cooperate with manual or automated integrity checks; obstructing a check can lead to severe penalties including a permanent account ban.'],
];

const activityRows = [
  ['OpenTibiaServers primary row', '742 (742 unique IPs) / 2,000', '99.42% uptime · x90 · PVP · 15.2', 'Dated directory snapshot associated with deletera.paulistinhaot.com:7171.'],
  ['Deletera inventory record', '742 peak', 'deletera.paulistinhaot.com:7171 · Brazil · 15.2 · PVP', 'Separate inventory observation dated July 25, 2026.'],
  ['Dominium inventory record', '568 peak', 'dominium.paulistinhaot.com:7171 · Brazil · 15.2 · PVP', 'Historical endpoint signal; current official worlds page reviewed does not list Dominium.'],
  ['Lordebra inventory record', '473 peak', 'lordebra.paulistinhaot.com:7171 · Brazil · 15.2 · Non-PVP', 'Inventory classification differs from the official page’s Optional PvP label; preserve both rather than silently choosing one.'],
  ['Official worlds page', '162 overall online', 'Deletera 77 · Lordebra 78 · Arkadia 7 · overall max 753', 'A separate official-page capture with its own timestamp and world roster.'],
];

const mediaSources = [
  ['PaulistinhaOT official homepage', 'https://paulistinhaot.com/', 'Official branding, status, news ticker, current boosted creature/boss, and navigation.'],
  ['PaulistinhaOT Instagram', 'https://www.instagram.com/paulistinhaot', 'Community channel linked by the official site; posts and activity can change.'],
  ['PaulistinhaOT Facebook', 'https://www.facebook.com/people/Paulistinhaot/61576304901276', 'Public social source linked from the official site; use dated posts as attributed evidence.'],
  ['PaulistinhaOT Discord', 'https://discord.com/invite/fnMgsS73n8', 'Community invite linked by the official site; membership and availability are time-sensitive.'],
  ['PaulistinhaOT WhatsApp', 'https://chat.whatsapp.com/H9D269ZQqHd1KnatrH9tNq', 'Community group linked by the official site; do not treat chat claims as official rules without confirmation.'],
];

export default async function PaulistinhaotWikiPage() {
  const directoryData = await fetchDirectoryServers({
    page: 1,
    pageSize: 8,
    search: 'PaulistinhaOT',
    onlineOnly: false,
  });
  const directoryServers = Array.isArray(directoryData?.servers) ? directoryData.servers.filter(Boolean) : [];
  const jsonLd = buildCuratedJsonLd(paulistinhaotPage);

  return (
    <main className="cyntara-wiki min-h-screen" data-server-slug="paulistinhaot">
      {jsonLd.map((entry, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }} />)}

      <header className="cyntara-wiki__header">
        <h1>{paulistinhaotPage.h1}</h1>
        <small>From OpenTibiaServers Wiki, the primary Open Tibia server directory</small>
      </header>

      <div className="cyntara-wiki__grid">
        <article className="cyntara-wiki__content">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="min-w-0 flex-1">
              <p><strong><em><u>PaulistinhaOT</u></em></strong>, also presented as <strong>PaulistinhaOT Global Servers</strong>, is a Brazilian multiworld <strong>Open Tibia network</strong> with different PvP and client identities. The current official world list presents <strong>Deletera</strong> as Retro Open PvP, <strong>Lordebra</strong> as Optional PvP, and <strong>Arkadia</strong> as Open PvP with an Only PTC client requirement.</p>
              <p>This <strong><em>PaulistinhaOT server guide</em></strong> separates current world information, historical launch announcements, public directory snapshots, and official update notes. That distinction matters when searching for <strong>PaulistinhaOT worlds</strong>, <strong>PaulistinhaOT rates</strong>, a client download, or live player counts: each world can have its own settings, launch stage, client path, and activity.</p>
            </div>
            <div className="w-full shrink-0 md:w-64"><ServerLogo server={{ name: 'PaulistinhaOT', slug: 'paulistinhaot', host: 'paulistinhaot.com' }} size="profile" /></div>
          </div>

          <nav className="cyntara-wiki__toc" aria-label="Table of Contents"><h2>Contents</h2><ol>{contents.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol></nav>

          <section id="overview">
            <SectionHeading>Overview &amp; network identity</SectionHeading>
            <p>PaulistinhaOT is better researched as a <strong>network of worlds</strong> than as one uniform server row. The official pages distinguish Open PvP, Optional PvP, and Retro Open PvP, and they attach different client labels and multiclient expectations to those worlds. A global listing can help with discovery, but it cannot replace selecting the world whose rules match the player’s goals.</p>
            <p>The network’s public identity also changes over time through updates and new-world launches. The reviewed news trail includes the <strong>15.30 Summer Update</strong>, the <strong>Targuna</strong> island, scalable bosses, <strong>Weapon Proficiency</strong>, <strong>Eco Raids</strong>, <strong>Echo Guardians</strong>, an improved Discovery System, and the Task System. Those names are useful search-intent anchors, but the current news and world pages remain the authority for what is active.</p>
            <div className="cyntara-wiki__callout"><strong>World-specific evidence note</strong><p>Do not transfer a Deletera rate, client rule, launch bonus, or PvP assumption to Lordebra or Arkadia without checking the selected world. The official server-info page explicitly asks players to choose a world before viewing detailed rates, features, and settings.</p></div>
          </section>

          <section id="facts">
            <SectionHeading>Reference facts</SectionHeading>
            <p>The table below keeps the public listing record visible while distinguishing it from the official website’s current world roster. Snapshot values are dated discovery signals, not permanent claims about the service.</p>
            <Table headers={['Field', 'Recorded value', 'Evidence and context']} rows={referenceRows} />
          </section>

          <section id="worlds">
            <SectionHeading>Worlds &amp; PvP modes</SectionHeading>
            <p>The official <a href="https://paulistinhaot.com/?subtopic=worlds" target="_blank" rel="nofollow noopener noreferrer">worlds page</a> currently lists Deletera, Lordebra, and Arkadia. It showed 162 players overall and 753 as the overall maximum in the reviewed capture. The current world table does not include Dominium, even though a historical news entry documents a Dominium launch plan, so the table preserves that difference.</p>
            <Table headers={['World', 'PvP type', 'Client label', 'Online snapshot', 'Context']} rows={worldRows} />
            <p><strong>Deletera</strong> is the clearest match for the primary directory endpoint <code>deletera.paulistinhaot.com:7171</code>. <strong>Lordebra</strong> is the lower-conflict Optional PvP choice in the official roster and accepts dual clients according to its tooltip. <strong>Arkadia</strong> is the Open PvP fresh-start identity with an Only PTC requirement; the “blocked” note in its extra-information field is not explained by the source page and should be checked before joining.</p>
            <h3>Launch and world-history context</h3>
            <Table headers={['World', 'Announced opening', 'Announced identity', 'Launch features', 'Evidence note']} rows={launchRows} />
          </section>

          <section id="systems">
            <SectionHeading>Systems, tasks &amp; progression</SectionHeading>
            <p>PaulistinhaOT’s feature set combines familiar Tibia progression with named systems for planning hunts, collecting rewards, modifying equipment, exploring zones, and participating in seasonal content. The official news describes these systems, but exact availability can vary by world and update stage.</p>
            <Table headers={['System', 'Documented player context']} rows={systemRows} />
            <p>The <strong>Task System</strong> is especially relevant to players searching for a PaulistinhaOT progression guide. Reward Tasks and Weekly Tasks are described as a Task Board loop rather than one static mission: objectives can involve kills or deliveries, while rewards include experience, reroll tokens, reward points, Hunting Task Points, Soul Seals, titles, achievements, and shop access. Confirm current requirements and reward values in the live game before planning a route.</p>
            <div className="cyntara-wiki__callout"><strong>Modern-client feature boundary</strong><p>PTC-only and dual-client labels belong to specific world pages. Weapon Proficiency, Spell Opacity, multiple-action buttons, Discovery improvements, and the Summer Update are official feature references, not proof that every world exposes every feature in exactly the same form.</p></div>
          </section>

          <section id="updates">
            <SectionHeading>Updates, quests &amp; equipment</SectionHeading>
            <p>The public news archive gives PaulistinhaOT a living update history. The most recent reviewed entry is the <strong>Summer Update 15.30</strong>, while earlier posts cover the 15.25 and 15.24 client updates, Targuna, and seasonal events. Players should read the linked article for the current release state instead of using a historical announcement as a permanent rules page.</p>
            <Table headers={['Date shown', 'Update or event', 'Publicly documented additions']} rows={updateRows} />
            <p>The Summer Update’s <strong>scalable boss</strong> system lets groups choose difficulty, unlock higher levels, and pursue better rewards. <strong>Moonsilver</strong> equipment is associated with that content, while <strong>Weapon Proficiency</strong> lets players adjust up to two advantage slots on each weapon. <strong>Eco Raids</strong> and rare Echo Guardians add optional encounters and stronger nearby enemies to the hunting loop.</p>
            <p>The <strong>Targuna</strong> island was announced with version 15.24 on March 31, 2026. Because the reviewed source does not provide a full map guide, monster catalogue, quest walkthrough, or reward table for Targuna, this page links the update trail without inventing route details.</p>
          </section>

          <section id="rules">
            <SectionHeading>Rules, client &amp; account safety</SectionHeading>
            <p>The <a href="https://paulistinhaot.com/?subtopic=rules" target="_blank" rel="nofollow noopener noreferrer">official rules</a> are central to any <strong><em>PaulistinhaOT download</em></strong> or PvP decision. They prohibit full automation and third-party advantages, restrict multiclienting in PvP, require cooperation with integrity checks, and direct character transactions to the official Bazaar.</p>
            <Table headers={['Rule area', 'Published position']} rows={rulesRows} />
            <p>The rules contain multiple IP-limit statements: a general four-client maximum, a two-character hunting/farm statement, and a stricter one-character hunting or boss statement. Rather than resolve that conflict by assumption, players should ask the current team which clause applies to the selected world and activity.</p>
            <ol>
              <li>Choose the world on the official <a href="https://paulistinhaot.com/?subtopic=worlds" target="_blank" rel="nofollow noopener noreferrer">worlds page</a> before relying on a client or PvP label.</li>
              <li>Create or manage an account through the official <a href="https://paulistinhaot.com/?subtopic=createaccount" target="_blank" rel="nofollow noopener noreferrer">account paths</a>.</li>
              <li>Use the official <a href="https://paulistinhaot.com/?subtopic=downloads" target="_blank" rel="nofollow noopener noreferrer">Downloads page</a>; the reviewed page does not publish a filename, checksum, OS requirement, or installation guide.</li>
              <li>Read the current rules for automation, PvP multiclienting, integrity checks, Bazaar trading, and sanctions before playing or spending money.</li>
              <li>Do not use a third-party mirror, copied launcher, or private account trade when an operator-controlled path is available.</li>
            </ol>
            <div className="cyntara-wiki__callout"><strong>PTC and client caution</strong><p>Arkadia is explicitly marked Only PTC on the official worlds page. The rules’ third-party-program footnote also refers to PTC-specific enforcement, so do not generalize an Arkadia client condition to Deletera or Lordebra without checking the current world documentation.</p></div>
          </section>

          <section id="activity">
            <SectionHeading>Activity Signals</SectionHeading>
            <p>Players searching <strong><em>PaulistinhaOT online</em></strong> should compare the source and capture date behind each number. The public listing’s 742-player signal, the inventory’s per-world peaks, and the official worlds page’s 162 overall count are not one synchronized live measurement.</p>
            <Table headers={['Source signal', 'Activity value', 'Profile context', 'Interpretation']} rows={activityRows} />
            <div className="cyntara-wiki__callout"><strong>Do not merge incompatible snapshots</strong><p>The directory record uses a primary Deletera host and a 15.2/x90/PVP profile, while the official world page reports current-looking per-world values and newer 15.30 branding. Keep both records dated until a refreshed source establishes which endpoint and version are current for each world.</p></div>
          </section>

          <section id="record">
            <SectionHeading>Living Record</SectionHeading>
            <p>This page preserves PaulistinhaOT’s public history as a multiworld service rather than reducing it to one static launch claim. Arkadia’s fresh-start announcement, Dominium’s historical Retro-PvP launch, Lordebra’s long-term Optional PvP positioning, and Deletera’s current roster entry each describe a different stage of the network.</p>
            <div className="grid gap-4 md:grid-cols-3">
              <FactCard label="Current official roster" text="Deletera, Lordebra, and Arkadia appear in the reviewed worlds table; Dominium is retained as historical news context." />
              <FactCard label="Update trail" text="15.24 introduced Targuna, 15.25 included vocation balancing, and 15.30 added new systems, quests, bosses, and equipment." />
              <FactCard label="Open documentation" text="Exact world-specific rates, vocation details, item catalogue, monster catalogue, and owner confirmation still need direct sources." />
            </div>
            <p>Owners and players can improve the record through the <Link href="/submit-server">server submission and claim flow</Link>, <Link href="/community_archive">community archive</Link>, dated notes, and screenshots. A durable <strong>PaulistinhaOT wiki profile</strong> should retain old launch evidence while making current changes easy to verify.</p>
          </section>

          <section id="faq">
            <SectionHeading>PaulistinhaOT FAQ</SectionHeading>
            <div className="space-y-4">{paulistinhaotPage.faqs.map((faq) => <details key={faq.question} className="rounded border border-black bg-white p-4"><summary className="cursor-pointer text-base font-bold text-black">{faq.question}</summary><p className="mt-3 text-sm leading-7 text-black">{faq.answer}</p></details>)}</div>
          </section>

          <section id="sources">
            <SectionHeading>What Public Sources Already Tell Us</SectionHeading>
            <p>The official PaulistinhaOT site is the primary source for the current world roster, selected-world server information, rules, downloads, account routes, news, event calendar, and official community channels. The OpenTibiaServers snapshot and project inventory provide discovery context for the Deletera, Dominium, and Lordebra endpoints, player signals, uptime, version labels, and region fields.</p>
            <div className="grid gap-3 md:grid-cols-2">{paulistinhaotPage.sourceLinks.slice(0, 7).map((source) => <SourceLink key={source.href} href={source.href} label={source.label} />)}</div>
            <div className="cyntara-wiki__callout"><strong>Evidence standard</strong><p>Current rates, world availability, client requirements, penalties, schedules, rewards, and player counts should be tied to an official page or dated operator announcement. When the official source requires a world selection or leaves a field blank, this guide keeps the value unconfirmed instead of borrowing from another world.</p></div>
          </section>

          <section id="media">
            <SectionHeading>Public Screenshot and Media Sources</SectionHeading>
            <p>PaulistinhaOT exposes official social channels and community invites, but this page does not mirror external artwork or screenshots without permission. Use the links below for attribution, launch context, and current community discovery.</p>
            <div className="grid gap-3 md:grid-cols-2">{mediaSources.map(([label, href, note]) => <SourceLink key={href} href={href} label={label} note={note} />)}</div>
          </section>

          <DirectoryRecommendation />

          <section id="listings">
            <SectionHeading>Matching Live Listings</SectionHeading>
            {directoryServers.length ? <div className="grid gap-3">{directoryServers.map((server) => <Link key={server.id || `${server.name}-${server.ip}`} href={`/servers/${buildServerSlug(server)}`} className="rounded border border-black bg-white p-4 hover:no-underline"><div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"><div><h3 className="text-base font-bold text-black">{server.name}</h3><p className="text-sm text-black">{server.version || 'Unknown client'} - {server.world_type || 'World type pending'} - {server.location || 'Location pending'}</p></div><div className="text-sm font-bold text-black">{Number(server.players_online || 0).toLocaleString()} online</div></div></Link>)}</div> : <p>No matching listing is available in the current directory response.</p>}
          </section>

          <section id="external-links">
            <SectionHeading>External Links</SectionHeading>
            <ul>{paulistinhaotPage.sourceLinks.map((source) => <li key={source.href}><ExternalLink href={source.href}>{source.label}</ExternalLink></li>)}<li><ExternalLink href="https://evomanias.com">Evomanias - Recommended Open Tibia Server</ExternalLink></li></ul>
          </section>
        </article>

        <aside className="cyntara-wiki__sidebar">
          <div className="cyntara-wiki__infobox">
            <div className="cyntara-wiki__infobox-header">PaulistinhaOT</div>
            <ServerLogo server={{ name: 'PaulistinhaOT', slug: 'paulistinhaot', host: 'paulistinhaot.com' }} size="profile" />
            <table><tbody>
              <tr><th>Network</th><td>Global multiworld</td></tr>
              <tr><th>Official worlds</th><td>Deletera, Lordebra, Arkadia</td></tr>
              <tr><th>Primary host</th><td><code>deletera.paulistinhaot.com:7171</code></td></tr>
              <tr><th>Listing profile</th><td>x90 / PVP / 15.2</td></tr>
              <tr><th>Player signal</th><td>742 / 2,000</td></tr>
              <tr><th>Uptime signal</th><td>99.42%</td></tr>
              <tr><th>Region signal</th><td>Brazil</td></tr>
              <tr><th>Current news</th><td>Summer Update 15.30</td></tr>
              <tr><th>Core systems</th><td>Tasks, Roulette, Mystery Bag, Discovery, Eco Raids</td></tr>
              <tr><th>Profile status</th><td>Source-backed; current details need verification</td></tr>
              <tr><th>Website</th><td><a href="https://paulistinhaot.com/" target="_blank" rel="nofollow noopener noreferrer">paulistinhaot.com</a></td></tr>
            </tbody></table>
          </div>

          <div className="cyntara-wiki__callout"><strong>Why This Page Exists</strong><p>To turn a time-sensitive <strong>PaulistinhaOT server list</strong> row into a durable world guide for PvP choices, client paths, updates, systems, rules, screenshots, and source-backed community context.</p><Link href="/submit-server">Claim or correct this listing</Link></div>

          <div className="rounded border border-gray-200 bg-white p-5">
            <h2 className="mb-3 text-base font-bold text-black">Related Directory Pages</h2>
            <div className="flex flex-wrap gap-2">
              <Link href="/servers/demolidores" className="rounded border border-black px-3 py-2 text-sm font-semibold text-black hover:no-underline">Demolidores</Link>
              <Link href="/servers/cyntara" className="rounded border border-black px-3 py-2 text-sm font-semibold text-black hover:no-underline">Cyntara</Link>
              <Link href="/servers/rubinot" className="rounded border border-black px-3 py-2 text-sm font-semibold text-black hover:no-underline">RubinOT</Link>
              <Link href="/servers/amonot" className="rounded border border-black px-3 py-2 text-sm font-semibold text-black hover:no-underline">AmonOT</Link>
              <Link href="/resources" className="rounded border border-black px-3 py-2 text-sm font-semibold text-black hover:no-underline">Resources</Link>
            </div>
          </div>

          <div className="rounded border border-gray-200 bg-white p-5">
            <h2 className="mb-3 text-base font-bold text-black">Search These Terms</h2>
            <div className="flex flex-wrap gap-2">{paulistinhaotPage.keywords.slice(0, 8).map((keyword) => <Link key={keyword} href={`/?search=${encodeURIComponent(keyword)}`} className="rounded border border-black px-3 py-2 text-sm font-semibold text-black hover:no-underline">{keyword}</Link>)}</div>
          </div>

          <div className="rounded border border-gray-200 bg-white p-5">
            <h2 className="mb-3 text-base font-bold text-black">Source trail</h2>
            <ul className="space-y-3">{paulistinhaotPage.sourceLinks.map((source) => <li key={source.href}><ExternalLink href={source.href}>{source.label}</ExternalLink></li>)}</ul>
          </div>
        </aside>
      </div>

      <KeywordPageCommunity pageSlug="paulistinhaot" keyword="PaulistinhaOT" />
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
