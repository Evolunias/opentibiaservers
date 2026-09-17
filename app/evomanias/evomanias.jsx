import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';
import { polishPlayerFacingCopy } from '@/lib/editorial-copy';

const page = polishPlayerFacingCopy({
  slug: 'evomanias',
  path: '/evomanias',
  type: 'server',
  title: 'Evomanias Open Tibia Server Guide | Featured Listing, Official Site, and Player Notes',
  h1: 'Evomanias Open Tibia Server: official site, account flow, and featured player guide',
  dek: 'Evomanias is featured with a free download, Plus Plan at $200/year (was $360, save $160), 500 free donation points, and a free store backpack for joining Discord — plus a direct path to the official site.',
  primaryKeyword: 'Evomanias',
  keywords: [
    'Evomanias',
    'Evomanias Open Tibia',
    'Evomanias OT server',
    'Evomanias official website',
    'Evomanias account creation',
    'featured Open Tibia server',
    'global OT server',
    'free to play OT server',
  ],
  metaDescription:
    'Evomanias Open Tibia server guide: free download, Plus Plan $200/yr (save $160), 500 free donation points, Discord free store backpack, official site links, and player-facing onboarding notes.',
  updatedAt: '2026-09-17',
  pageLabel: 'Featured Server',
  sourceLinks: [
    {
      label: 'Evomanias official website',
      href: 'https://evomanias.com/',
    },
    {
      label: 'Free download / client',
      href: 'https://evomanias.com/downloads',
    },
    {
      label: 'Official Discord',
      href: 'https://discord.gg/wj4D48Jj5W',
    },
  ],
  officialAccess: [
    {
      label: 'Official Website',
      href: 'https://evomanias.com/',
      kind: 'official-domain',
      note: 'Primary domain for the featured Evomanias listing.',
    },
    {
      label: 'Free Download',
      href: 'https://evomanias.com/downloads',
      kind: 'download',
      note: 'Client download — free to play core world.',
    },
    {
      label: 'Discord (free store backpack)',
      href: 'https://discord.gg/wj4D48Jj5W',
      kind: 'discord',
      note: 'Join Discord for the free store backpack perk.',
    },
  ],
  cta: {
    label: 'Play Evomanias — free download',
    href: 'https://evomanias.com/downloads',
  },
  facts: [
    { label: 'Primary topic', value: 'Evomanias featured server profile' },
    { label: 'Official domain', value: 'evomanias.com' },
    { label: 'Plus Plan', value: '$200/year (was $360, save $160)' },
    { label: 'Starter offer', value: '500 free donation points + free Discord store backpack' },
    { label: 'Access', value: 'Free download and free-to-play core world' },
    { label: 'Directory role', value: 'Featured server and comparison landing page' },
  ],
  infobox: [
    { label: 'Canonical page', value: 'opentibiaservers.com/evomanias' },
    { label: 'Classification', value: 'Featured Open Tibia server profile' },
    { label: 'Best use', value: 'Start here before comparing Evomanias with other OT servers' },
    { label: 'Access path', value: 'Official website supplied by the server operator' },
    { label: 'Verification status', value: 'Partial until owner-confirmed details are added' },
    { label: 'Comparison angle', value: 'Free download, Plus Plan $200/yr, 500 free points, Discord backpack' },
  ],
  overview:
    'Evomanias sits at the top of the directory as a featured Open Tibia choice. Current player offer: free download and free-to-play, Plus Plan at $200/year (was $360, save $160), 500 free donation points, and a free store backpack for joining Discord. This page links the official site, downloads, and Discord so searchers can act without hunting for the next step.',
  timeline: [
    {
      date: 'Current',
      title: 'Evomanias is highlighted as a featured directory listing',
      text:
        'The page is positioned as a promoted server profile so players can move from the directory into the official domain without losing context or needing to hunt through thin placeholder copy.',
    },
    {
      date: 'Current',
      title: 'Official site stays the first trusted destination',
      text:
        'The official Evomanias domain is the only external source linked here until more owner-confirmed fields are supplied. That keeps the page honest while still giving searchers a direct path forward.',
    },
    {
      date: 'Next step',
      title: 'Owner claims should fill the missing fields',
      text:
        'Screenshots, Discord, launcher notes, support contacts, rules, and feature notes can be added after verification so the page becomes a durable player resource rather than a one-line listing.',
    },
  ],
  evergreenAngles: [
    'Evomanias is treated as a featured server name, not a throwaway row.',
    'The page answers the search intent behind the name first: official site, account flow, and player fit.',
    'Comparison context matters because players usually decide between Evomanias and several nearby OT alternatives.',
    'The page should feel useful even before every field is owner verified.',
  ],
  glossary: [
    {
      term: 'Featured server',
      definition:
        'A promoted Open Tibia listing given extra visibility because players are expected to search for it directly or compare it against adjacent servers.',
    },
    {
      term: 'Owner-confirmed detail',
      definition:
        'Information that has been verified by the server owner or a manager through the claim flow, a signed community post, or another dependable public source.',
    },
    {
      term: 'Account flow',
      definition:
        'The sequence a player follows from discovering the official site to creating an account, downloading a client, and reaching the game world.',
    },
    {
      term: 'Global OT',
      definition:
        'A server positioned for broad reach and easy access rather than a narrow local audience, usually emphasizing account clarity and a stable public presence.',
    },
  ],
  researchNotes: [
    {
      label: 'Official domain supplied by the user',
      value:
        'The page uses evomanias.com as the trusted starting point and keeps it visible everywhere the player is likely to look next.',
    },
    {
      label: 'Promotional banner context',
      value:
        'OpenTibiaServers.com highlights Evomanias with Plus Plan $200/yr (save $160), 500 free donation points, free download, and a Discord free store backpack CTA.',
    },
    {
      label: 'Offer links confirmed for this update',
      value:
        'Official site, downloads, and Discord are linked for the Plus Plan / free-points / backpack campaign. Screenshots, rules, and support contacts can still expand after claim.',
    },
  ],
  sections: [
    {
      eyebrow: 'Player Intent',
      heading: 'Why players search for Evomanias',
      body: [
        'Most searchers do not arrive at a server name by accident. They want the official website, the registration path, the world style, and a fast answer to whether the server feels active enough to invest time in.',
        'Evomanias should therefore work as a landing page, not just a directory row. The first screen needs to reduce doubt and help players move from curiosity into a direct decision: visit the official site, create an account, or compare the server against similar choices.',
        'That is why the page emphasizes the official domain and a clean checklist instead of pretending that every field has already been proven.'
      ],
    },
    {
      eyebrow: 'First Impressions',
      heading: 'What the featured listing should communicate at a glance',
      body: [
        'The page should read like a short but reliable brief: this is the official domain, this is the place to start, and this is the server the directory is putting in front of players right now.',
        'If the server owner later confirms more detail, the profile can expand into a deeper historical and gameplay reference. Until then, the value is in the clarity of the first step and the usefulness of the comparison path.',
      ],
    },
    {
      eyebrow: 'Onboarding',
      heading: 'The account-first path matters more than hype',
      body: [
        'A strong Open Tibia server page should never force a player to guess where to click next. Evomanias gets a direct official link, a clear call to create an account, and a visible comparison path back into the directory.',
        'That keeps the journey intact for players who want to test a new server without having to wade through scattered or suspicious third-party mirrors.',
      ],
    },
    {
      eyebrow: 'Comparison',
      heading: 'How to judge Evomanias against other OT servers',
      body: [
        'The real comparison is not only about how the name sounds. Players usually want to know whether the server is free to play, whether the website is clear, whether the community is easy to join, and whether the progression style matches their available time.',
        'That is why the page points to both the official site and other nearby server pages. Searchers can compare Evomanias with the broader OT field instead of treating the homepage as a dead-end.',
      ],
    },
    {
      eyebrow: 'Community',
      heading: 'What still needs to be added after verification',
      body: [
        'Once the owner claims the listing, the page should expand with screenshots, server rules, Discord, support links, launcher information, and any notes that help a player trust the profile before they commit.',
        'Those details belong on the page because they reduce friction. Players stay longer when a listing feels complete, honest, and easy to act on.',
      ],
    },
    {
      eyebrow: 'Use Case',
      heading: 'Why this page belongs in a serious OT directory',
      body: [
        'A directory becomes more useful when it treats key servers as real destinations rather than generic rows. Evomanias deserves a dedicated page because people search the name directly and expect a substantial answer.',
        'The job of the page is to make that answer better than a bare link: cleaner structure, clearer navigation, a direct official domain, and enough context for the player to decide what to do next.',
      ],
    },
  ],
  faq_items: [
    {
      question: 'Is Evomanias free to play?',
      answer:
        'Yes — Evomanias is free to download and free to play for the core world. Plus Plan is optional at $200/year (was $360, save $160). New players also get 500 free donation points, and a free store backpack for joining Discord.',
    },
    {
      question: 'Where should I go first for Evomanias?',
      answer:
        'Download from evomanias.com/downloads, create an account on evomanias.com, then join Discord at discord.gg/wj4D48Jj5W for the free store backpack. Come back here to compare Evomanias with other OT options.',
    },
    {
      question: 'What is the current Evomanias offer?',
      answer:
        'Plus Plan $200/year (was $360, save $160), free download, 500 free donation points, and a free store backpack for joining the official Discord. Check evomanias.com for the latest store and community verify flow.',
    },
    {
      question: 'What makes a strong Evomanias profile?',
      answer:
        'A complete profile should include screenshots, Discord, launcher details, rules, support contacts, and any verified gameplay notes that help new players trust the server before they join.',
    },
  ],
  relatedServerQueries: ['Cyntara', 'Evolunia', 'Antica', 'OTMadness', 'OTServlist', 'community_archive'],
  wikiDepth: {
    status: 'partial',
    statusLabel: 'Featured server profile',
    missingFields: ['launcher details', 'support contact', 'screenshots', 'rules', 'owner notes'],
    sourcePolicy:
      'Official site, downloads, and Discord are linked for the current campaign. Screenshots, rules, and support contacts should still be expanded once the listing is claimed.',
    sourceCandidates: [
      {
        label: 'Evomanias official website',
        href: 'https://evomanias.com/',
        type: 'official_domain',
        use: 'Primary official domain for account, launch, and public server details.',
      },
      {
        label: 'Free download',
        href: 'https://evomanias.com/downloads',
        type: 'download',
        use: 'Client download for free-to-play access.',
      },
      {
        label: 'Official Discord',
        href: 'https://discord.gg/wj4D48Jj5W',
        type: 'discord',
        use: 'Community Discord — free store backpack join perk.',
      },
    ],
    gameplayGuide: [
      {
        heading: 'Start from the official domain',
        body:
          'Use the official website as the first decision point. That keeps the page honest and prevents players from being redirected into unverified mirrors or stale launch pages.',
      },
      {
        heading: 'Compare the server before committing',
        body:
          'A featured OT page should help players compare Evomanias against other choices by rules, region, community size, and account clarity rather than by banner copy alone.',
      },
      {
        heading: 'Treat the profile as expandable',
        body:
          'The page is intentionally built to grow. Once the owner claims the listing, the profile can carry more of the historical, gameplay, and community detail players expect.',
      },
    ],
    systems: {
      access: [
        'Official site first',
        'Claim flow for owner confirmation',
        'Discord and downloads linked for current offer',
      ],
      discovery: [
        'Featured banner placement',
        'Searchable exact-match page',
        'Cross-links to similar OT server pages',
      ],
      verification: [
        'Direct official domain',
        'Owner-confirmed contact details',
        'Screenshots and rules after claim',
      ],
    },
    editorialQueue: [
      'Keep Plus Plan $200/yr and starter offer copy current.',
      'Add screenshots from the official site or owner approval.',
      'List launch notes, rules, and support contacts.',
      'Expand the profile with a verified gameplay summary once the owner claims it.',
    ],
  },
});

export function generateMetadata() {
  return buildArticleMetadata(page);
}

export default function EvomaniasPage() {
  return <CuratedGuideArticle page={page} />;
}
