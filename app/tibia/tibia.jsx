import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "slug": "tibia",
  "path": "/tibia",
  "type": "topic",
  "title": "Tibia and Open Tibia Server Guide",
  "h1": "Tibia: Official Game, Open Tibia Servers, Worlds, Clients, and Community Discovery",
  "dek": "A player-focused hub for understanding Tibia what players came to find: the official MMORPG, Open Tibia servers, OT communities, world history, client versions, safe downloads, and active server discovery.",
  "primaryKeyword": "Tibia",
  "keywords": [
    "Tibia",
    "Tibia servers",
    "Open Tibia servers",
    "OT servers",
    "Tibia worlds",
    "Tibia server list",
    "Tibia private servers",
    "community_archive",
    "OTServlist"
  ],
  "metaDescription": "Tibia guide for players comparing official Tibia, Open Tibia servers, OT server lists, worlds, clients, safe downloads, forums, and active communities.",
  "updatedAt": "2026-07-27",
  "pageLabel": "Open Tibia Reference Hub",
  "heroImage": {
    "src": "/images/guides/antica-hero.png",
    "alt": "Fantasy harbor city representing Tibia world history and Open Tibia server discovery"
  },
  "overview": "Tibia is the root search term behind the entire Open Tibia ecosystem. Some players want the official MMORPG, some want a specific world, some want an OT server with faster progression or old-school mechanics, and some are trying to verify whether a server website, client download, Discord, forum thread, or server-list row is legitimate.",
  "cta": {
    "label": "Browse Active Open Tibia Servers",
    "href": "/"
  },
  "facts": [
    {
      "label": "Primary topic",
      "value": "Tibia and Open Tibia discovery"
    },
    {
      "label": "Official game",
      "value": "Tibia by CipSoft"
    },
    {
      "label": "OT meaning",
      "value": "Independently operated Open Tibia servers"
    },
    {
      "label": "Player intent",
      "value": "Official game documentation, server discovery, worlds, clients, downloads, communities"
    }
  ],
  "infobox": [
    {
      "label": "Canonical page",
      "value": "opentibiaservers.com/tibia"
    },
    {
      "label": "Classification",
      "value": "Core topic hub"
    },
    {
      "label": "Best use",
      "value": "Start here before comparing OT servers, worlds, and clients"
    },
    {
      "label": "Safety priority",
      "value": "Verify official sites and community sources before downloading clients"
    },
    {
      "label": "Community sources",
      "value": "Tibia.com, community_archive, OTServlist, server websites, Discords, forums"
    }
  ],
  "timeline": [
    {
      "date": "1997",
      "title": "Tibia begins its long-running MMORPG history",
      "text": "Tibia becomes one of the longest-running online role-playing games, creating the mechanics, world identity, and player culture that later shaped Open Tibia servers."
    },
    {
      "date": "Open Tibia era",
      "title": "Independent servers become a parallel discovery layer",
      "text": "Open Tibia servers let communities experiment with different versions, rates, maps, PvP rules, custom systems, resets, and launch models while preserving familiar Tibia-style gameplay."
    },
    {
      "date": "Server-list era",
      "title": "Directories and forums become essential verification sources",
      "text": "Players increasingly rely on OTServlist, community_archive server launch archive, official server websites, Discords, and community threads to verify whether a server is active, safe, and worth playing."
    },
    {
      "date": "OpenTibiaServers.com",
      "title": "The directory becomes a richer player perspective hub",
      "text": "The goal is to aggregate public listings and community sources into pages with live data, source links, owner claims, reviews, screenshots, uptime monitoring, and long-term historical context."
    }
  ],
  "evergreenAngles": [
    "Tibia is both an official-game name and the parent intent behind Open Tibia server discovery.",
    "Players searching broad Tibia terms need routing: official game, worlds, servers, clients, guides, forums, screenshots, and safe download checks.",
    "The page should help users avoid unsafe downloads by pushing them toward official sites, known community threads, and owner-claimed listings.",
    "A strong Tibia hub can connect dedicated server pages, official worlds, community_archive discoveries, OTServlist records, and player reviews in one durable resource."
  ],
  "glossary": [
    {
      "term": "Tibia",
      "definition": "The official long-running MMORPG by CipSoft and the origin of the mechanics, world identity, and player culture that inspired Open Tibia servers."
    },
    {
      "term": "Open Tibia server",
      "definition": "An independently operated server inspired by Tibia, often using different client versions, rates, maps, PvP rules, custom systems, and reset policies."
    },
    {
      "term": "OTServlist",
      "definition": "A long-running public Open Tibia server list that players use to compare online counts, uptime, versions, rates, and server hosts."
    },
    {
      "term": "community_archive server launch archive",
      "definition": "An community_archive forum board where server owners advertise Open Tibia launches, updates, seasons, screenshots, rules, and community discussion."
    },
    {
      "term": "Client version",
      "definition": "The Tibia or OT client protocol version a server expects, such as 7.4, 8.0, 8.6, 10.98, 12.x, 13.x, 15.x, or a custom OTClient build."
    }
  ],
  "sourceLinks": [
    {
      "label": "Tibia official website",
      "href": "https://www.tibia.com/"
    },
    {
      "label": "Tibia game guide and worlds",
      "href": "https://www.tibia.com/gameguides/?section=world&subtopic=manual"
    },
    {
      "label": "community_archive server launch archive",
      "href": "https://opentibiaservers.com/"
    },
    {
      "label": "OTServlist players-online ranking",
      "href": "https://otservlist.org/list-server_players_online-desc.html"
    }
  ],
  "relatedServerQueries": [
    "Tibia servers",
    "Open Tibia servers",
    "OT servers",
    "Tibia 8.6 servers",
    "Tibia 7.4 servers",
    "community_archive server launch archive",
    "OTServlist",
    "Tibia worlds"
  ],
  "sections": [
    {
      "eyebrow": "what players came to find",
      "heading": "Why Tibia needs a dedicated page on OpenTibiaServers.com",
      "body": [
        "A broad search for Tibia can mean several different things. One player may want the official game website, another may want a specific world like Antica or Nova, another may want a modern high-rate OT server, and another may be trying to verify whether a private server client is safe to download.",
        "That mixed intent is exactly why this page exists. It routes the player toward official Tibia context, active Open Tibia server listings, community_archive launch threads, OTServlist snapshots, world-history pages, and claimable server profiles without pretending those sources are interchangeable."
      ]
    },
    {
      "eyebrow": "Official vs OT",
      "heading": "The difference between Tibia and Open Tibia servers",
      "body": [
        "Tibia is the official MMORPG operated by CipSoft. Open Tibia servers are independently operated communities inspired by Tibia mechanics. They may use old protocols, custom clients, faster rates, real maps, custom maps, resets, events, new systems, or rules that do not exist on official worlds.",
        "Players should treat that distinction seriously. Official Tibia world data belongs to Tibia.com, while OT server claims need verification through server websites, public lists, forums, Discords, owner claims, screenshots, and live monitoring."
      ]
    },
    {
      "eyebrow": "Player Safety",
      "heading": "How to verify a Tibia or OT server before downloading anything",
      "body": [
        "Before installing a client, verify the official website, account creation path, listed host, Discord or forum, rules, staff posts, screenshots, and whether the server appears in public listing data. Avoid unrelated mirrors and random download links when an official source is available.",
        "A trustworthy Open Tibia profile should eventually show live online count, uptime history, source links, owner-managed fields, screenshots, reviews, community discussion, and clear contact or support channels."
      ]
    },
    {
      "eyebrow": "Discovery",
      "heading": "How OpenTibiaServers.com should serve Tibia players",
      "body": [
        "The best directory is not a table clone. It should preserve live server-list data, but then expand each listing into a useful page: official links, launch history, rates, PvP rules, screenshots, reviews, forum context, Discord signals, uptime checks, and owner-verified corrections.",
        "For broad Tibia visitors, the directory should make it easy to move from a general idea to a dedicated page: Antica, Nova, Cyntara, Evolunia, NoxiousOT, OxygenOT, Kaldrox, Miracle 7.4, community_archive, OTServlist, and newly discovered server launch archive listings."
      ]
    },
    {
      "eyebrow": "Community",
      "heading": "What the Tibia community can add here",
      "body": [
        "Players can make the page more valuable by adding reviews, screenshots, correction reports, guild or war memories, server recommendations, and notes about dead links or unsafe mirrors.",
        "Server owners can claim their listings, add official websites, client links, Discords, rules, screenshots, FAQs, changelogs, event calendars, and staff contact information. That is how a broad Tibia hub becomes a practical community resource."
      ]
    }
  ],
  "faqs": [
    {
      "question": "Is Tibia the same as Open Tibia?",
      "answer": "No. Tibia is the official MMORPG. Open Tibia servers are independently operated servers inspired by Tibia mechanics and community culture."
    },
    {
      "question": "What should I check before playing an Open Tibia server?",
      "answer": "Verify the official website, listed host, client version, account page, rules, Discord or forum, screenshots, uptime, online count, and whether the download link comes from a trusted source."
    },
    {
      "question": "Why does OpenTibiaServers.com cover official Tibia worlds?",
      "answer": "Official world names are part of how players search. A player perspectiveing Antica, Nova, or another world may also want OT alternatives with similar PvP, old-school, or community characteristics."
    },
    {
      "question": "Where do new Open Tibia servers get discovered?",
      "answer": "Common discovery sources include OTServlist, community_archive server launch archive, server websites, Discord communities, forum posts, and player recommendations."
    }
  ],
  "researchNotes": [
    {
      "label": "Official-game source boundary",
      "value": "Tibia.com remains the primary source for official Tibia game and world information. OpenTibiaServers.com should reference it clearly rather than merging official-world facts with private-server claims."
    },
    {
      "label": "Community-source boundary",
      "value": "community_archive server launch archive threads are useful public launch and discussion records. They should be treated as source leads that require owner or live-server verification before being considered complete listings."
    }
  ],
  "mediaLeads": [
    {
      "label": "Official Tibia website",
      "href": "https://www.tibia.com/",
      "note": "Use official pages for official-game context and avoid mirroring copyrighted material unless permission or license allows it."
    },
    {
      "label": "community_archive server launch archive screenshots in source threads",
      "href": "https://opentibiaservers.com/",
      "note": "Server owners often post launch graphics and gameplay screenshots in their threads; link to source threads unless permission allows local reuse."
    }
  ]
};

export function generateMetadata() {
  return buildArticleMetadata(page);
}

export default function TibiaPage() {
  return <CuratedGuideArticle page={page} />;
}
