import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "slug": "otservlist",
  "path": "/otservlist",
  "type": "ecosystem",
  "title": "otservlist.org Alternative and Open Tibia Server Discovery",
  "h1": "otservlist.org and Modern Open Tibia Server Discovery",
  "dek": "A practical guide to reading public OT server-list data while comparing servers through clearer profiles, owner-managed context, and community evidence.",
  "primaryKeyword": "otservlist",
  "keywords": [
    "otservlist",
    "otservlist.org",
    "otservlist alternative",
    "Open Tibia server list",
    "OT server list"
  ],
  "metaDescription": "Compare otservlist.org with OpenTibiaServers.com for Open Tibia server discovery, live player counts, uptime, versions, rates, and richer listing pages.",
  "updatedAt": "2026-07-26",
  "pageLabel": "Directory Reference",
  "overview": "otservlist.org is a major discovery point for Open Tibia servers. This page is designed as a lasting reference for how players use server-list data, what raw listings can and cannot answer, and how richer directory pages can improve discovery.",
  "cta": {
    "label": "Browse Live OT Servers",
    "href": "/"
  },
  "facts": [
    {
      "label": "Category",
      "value": "Open Tibia server list"
    },
    {
      "label": "what players need",
      "value": "Find active OT servers and compare population, rates, uptime, and versions"
    },
    {
      "label": "Opportunity",
      "value": "Richer listing pages, better filtering, and easier-to-find server profiles"
    }
  ],
  "infobox": [
    {
      "label": "Primary topic",
      "value": "Open Tibia server-list discovery"
    },
    {
      "label": "Canonical page",
      "value": "opentibiaservers.com/otservlist"
    },
    {
      "label": "what players came to find",
      "value": "Find, compare, and verify active OT servers"
    },
    {
      "label": "Important caveat",
      "value": "Raw rows need context before players choose where to spend time"
    }
  ],
  "timeline": [
    {
      "date": "Server-list era",
      "title": "Raw listings become the default discovery layer",
      "text": "Players learn to scan IP, server name, players online, uptime, points, EXP rate, PvP type, and client version before opening a server website."
    },
    {
      "date": "API removal context",
      "title": "Directory operators need resilient sync methods",
      "text": "When public APIs disappear or become limited, a directory needs careful public-data ingestion, deduplication, source mapping, and crawlable page templates."
    },
    {
      "date": "A richer directory era",
      "title": "Server names need permanent pages",
      "text": "The strongest user experience is not just a sortable table. It is a stable record for every important server name with history, official links, live signals, and comparison context."
    }
  ],
  "evergreenAngles": [
    "How players interpret online counts, versions, uptime, and rates.",
    "Why source data needs context, owner-managed details, and historical snapshots.",
    "How a modern directory can preserve discoverability after public APIs disappear.",
    "Why dedicated server pages can answer a player's questions better than a table alone."
  ],
  "glossary": [
    {
      "term": "Server list",
      "definition": "A directory of Open Tibia servers, usually showing IP, server name, online players, uptime, rates, PvP type, and client version."
    },
    {
      "term": "Source mapping",
      "definition": "The process of storing public listing fields in a normalized database so records can be deduplicated, updated, enriched, and rendered into better pages."
    },
    {
      "term": "Claimed listing",
      "definition": "A directory record that a verified server owner or manager can enrich with official links, descriptions, images, rules, and support information."
    }
  ],
  "sourceLinks": [
    {
      "label": "otservlist.org",
      "href": "https://otservlist.org/"
    },
    {
      "label": "otservlist FAQ",
      "href": "https://usa.otservlist.org/pages/faq"
    },
    {
      "label": "otservlist live USA listing",
      "href": "https://usa.otservlist.org/"
    }
  ],
  "sections": [
    {
      "eyebrow": "Comparison",
      "heading": "What players want from an OT server list",
      "body": [
        "Players use otservlist-style pages to answer fast questions: which servers are online, which have real players, which client version they run, and which are worth trying today.",
        "A stronger directory experience adds intent-focused pages, cleaner filters, deeper server profiles, claimable listings, reviews, uptime history, and search-friendly pages for each server name."
      ]
    },
    {
      "eyebrow": "Discovery",
      "heading": "Why richer server pages matter",
      "body": [
        "Raw tables are useful for scanning, but they do not fully answer what players need. A player deciding where to spend time wants rules, website links, community links, launch context, rates, client notes, and trust signals.",
        "OpenTibiaServers.com is structured to preserve public listing data while expanding each record into a durable, permanent page."
      ]
    },
    {
      "eyebrow": "Directory Strategy",
      "heading": "How OpenTibiaServers.com can improve on raw server lists",
      "body": [
        "The goal is not to replace useful public rows with marketing copy. The goal is to preserve the data players already trust, then add context that helps them make better decisions.",
        "That means hourly sync, normalized schema mapping, canonical server-name pages, owner claim flows, official sources, reviews, uptime history, screenshots or curated visuals, and internal links between similar servers."
      ]
    }
  ],
  "faqs": [
    {
      "question": "Is OpenTibiaServers.com an otservlist replacement?",
      "answer": "It is designed as a richer Open Tibia directory: public listing data, clearer rendering, individual server pages, owner-managed context, reviews, and uptime history."
    },
    {
      "question": "Why does each server need its own page?",
      "answer": "Players often arrive with a specific server in mind. A permanent page can combine live data, official links, history, rules, visuals, and useful comparison context."
    }
  ],
  "relatedServerQueries": [
    "Cyntara",
    "OTMadness",
    "Evolunia",
    "8.6"
  ]
};

export function generateMetadata() {
  return buildArticleMetadata(page);
}

export default function OtservlistPage() {
  return <CuratedGuideArticle page={page} />;
}
