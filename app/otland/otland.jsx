import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "slug": "otland",
  "path": "/otland",
  "type": "ecosystem",
  "title": "OTLand Open Tibia Community Guide",
  "h1": "OTLand: Open Tibia Development, Server Gala, and Community Discovery",
  "dek": "A curated guide to OTLand for players, server owners, developers, and people exploring the Open Tibia ecosystem.",
  "primaryKeyword": "OTLand",
  "keywords": [
    "OTLand",
    "Open Tibia forum",
    "OpenTibia community",
    "OTLand server gala",
    "The Forgotten Server"
  ],
  "metaDescription": "Guide to OTLand, the Open Tibia community, including server advertisements, support, resources, tutorials, and development projects.",
  "updatedAt": "2026-07-26",
  "pageLabel": "Community Reference",
  "overview": "OTLand is a major Open Tibia community reference point for players, developers, server owners, and community historians. It connects server advertising, technical support, development resources, and community discussion.",
  "cta": {
    "label": "Find Servers Listed by the OT Community",
    "href": "/"
  },
  "facts": [
    {
      "label": "Category",
      "value": "Open Tibia community"
    },
    {
      "label": "Known for",
      "value": "Forums, Server Gala, support, resources, tutorials"
    },
    {
      "label": "Developer relevance",
      "value": "The Forgotten Server, OTClient, maps, scripts, and tools"
    }
  ],
  "infobox": [
    {
      "label": "Primary topic",
      "value": "Open Tibia community and development"
    },
    {
      "label": "Canonical page",
      "value": "opentibiaservers.com/otland"
    },
    {
      "label": "Useful for",
      "value": "Players, server owners, developers, mappers, and scripters"
    },
    {
      "label": "Discovery area",
      "value": "Server Gala advertisement board for OpenTibia servers"
    },
    {
      "label": "Development areas",
      "value": "The Forgotten Server, OTClient, mapping, scripting, tools, resources"
    }
  ],
  "timeline": [
    {
      "date": "Community forum era",
      "title": "OTLand becomes a central Open Tibia knowledge base",
      "text": "The forum format gives Open Tibia a long-lived record of support questions, server launches, mapping work, scripting discussions, tools, and resources."
    },
    {
      "date": "Server Gala",
      "title": "Server advertisements gain their own discovery channel",
      "text": "OTLand Server Gala is an advertisement board for OpenTibia servers, making it one of the natural places players and owners use around launch discovery."
    },
    {
      "date": "Modern directory context",
      "title": "Forum discovery and database discovery complement each other",
      "text": "A forum thread can preserve a launch story and community replies; a directory record can preserve live data, uptime, structured facts, and a lasting server profile."
    }
  ],
  "evergreenAngles": [
    "OTLand as a discovery channel for server launches and community trust.",
    "OTLand as a development hub for server code, clients, maps, scripts, and guides.",
    "How community presence can help players evaluate whether an OT server is credible.",
    "Why OpenTibiaServers.com should link forum discovery with live directory data instead of treating them as separate worlds."
  ],
  "glossary": [
    {
      "term": "Server Gala",
      "definition": "An OTLand forum area used for OpenTibia server advertisements, launch threads, replies, and community discovery."
    },
    {
      "term": "The Forgotten Server",
      "definition": "A widely referenced open-source Open Tibia server project associated with the OTLand development ecosystem."
    },
    {
      "term": "OTClient",
      "definition": "An Open Tibia client ecosystem often discussed alongside server development, custom clients, UI work, and compatibility questions."
    }
  ],
  "sourceLinks": [
    {
      "label": "OTLand",
      "href": "https://otland.net/"
    },
    {
      "label": "OTLand Server Gala",
      "href": "https://otland.net/forums/server-gala.43/"
    },
    {
      "label": "OTLand GitHub",
      "href": "https://github.com/otland"
    },
    {
      "label": "OTS Guide",
      "href": "https://docs.otland.net/ots-guide"
    }
  ],
  "sections": [
    {
      "eyebrow": "Community",
      "heading": "Why OTLand matters",
      "body": [
        "OTLand is one of the central communities around Open Tibia. Players use it to discover server launches, while owners and developers use it for support, resources, maps, scripts, and discussion.",
        "For searchers, OTLand often means intent beyond a single server: they may be trying to find a new launch, learn how OT servers work, or evaluate whether a server has real community presence."
      ]
    },
    {
      "eyebrow": "Server Discovery",
      "heading": "How OTLand fits into Open Tibia server guide",
      "body": [
        "OTLand threads can carry launch announcements, replies, updates, staff presence, criticism, and community history. That is valuable context that a raw listing cannot fully capture.",
        "OpenTibiaServers.com can complement that by turning server names into structured records: live player counts, uptime, rates, versions, countries, source links, official websites, and claimable owner-managed details."
      ]
    },
    {
      "eyebrow": "Development Context",
      "heading": "Why OTLand also matters to server owners",
      "body": [
        "Owners and developers documentation OTLand for server engines, client work, mapping, scripting, AACs, tools, and troubleshooting. Those development signals often correlate with whether a server has a credible team behind it.",
        "A strong directory should eventually surface those trust signals carefully: official thread links, update history, owner verification, source community presence, and whether the server maintains clear support channels."
      ]
    }
  ],
  "faqs": [
    {
      "question": "What is OTLand used for?",
      "answer": "OTLand is used for Open Tibia discussion, support, resources, server advertisements, development topics, mapping, scripting, client work, and community discovery."
    },
    {
      "question": "Why does an Open Tibia directory need OTLand context?",
      "answer": "Many server launches and community discussions happen on forums. Directory pages can use that context alongside live listing data to help players evaluate credibility and activity."
    }
  ],
  "relatedServerQueries": [
    "Server Gala",
    "8.6",
    "Open PvP"
  ]
};

export function generateMetadata() {
  return buildArticleMetadata(page);
}

export default function OtlandPage() {
  return <CuratedGuideArticle page={page} />;
}
