import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "slug": "community_archive",
  "path": "/community_archive",
  "type": "ecosystem",
  "title": "community archive Open Tibia Community Guide",
  "h1": "community archive: Open Tibia Development, server launch archive, and Community Discovery",
  "dek": "A curated guide to community archive for players, server owners, developers, and people exploring the Open Tibia ecosystem.",
  "primaryKeyword": "community archive",
  "keywords": [
    "community archive",
    "Open Tibia forum",
    "OpenTibia community",
    "community archive server launch archive",
    "The Forgotten Server"
  ],
  "metaDescription": "Guide to community archive, the Open Tibia community, including server advertisements, support, resources, tutorials, and development projects.",
  "updatedAt": "2026-07-26",
  "pageLabel": "Community Reference",
  "overview": "community archive is a major Open Tibia community reference point for players, developers, server owners, and community historians. It connects server advertising, technical support, development resources, and community discussion.",
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
      "value": "Forums, server launch archive, support, resources, tutorials"
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
      "value": "opentibiaservers.com/community_archive"
    },
    {
      "label": "Useful for",
      "value": "Players, server owners, developers, mappers, and scripters"
    },
    {
      "label": "Discovery area",
      "value": "server launch archive advertisement board for OpenTibia servers"
    },
    {
      "label": "Development areas",
      "value": "The Forgotten Server, OTClient, mapping, scripting, tools, resources"
    }
  ],
  "timeline": [
    {
      "date": "Community forum era",
      "title": "community archive becomes a central Open Tibia knowledge base",
      "text": "The forum format gives Open Tibia a long-lived record of support questions, server launches, mapping work, scripting discussions, tools, and resources."
    },
    {
      "date": "server launch archive",
      "title": "Server advertisements gain their own discovery channel",
      "text": "community archive server launch archive is an advertisement board for OpenTibia servers, making it one of the natural places players and owners use around launch discovery."
    },
    {
      "date": "Modern directory context",
      "title": "Forum discovery and database discovery complement each other",
      "text": "A forum thread can preserve a launch story and community replies; a directory record can preserve live data, uptime, structured facts, and a lasting server profile."
    }
  ],
  "evergreenAngles": [
    "community archive as a discovery channel for server launches and community trust.",
    "community archive as a development hub for server code, clients, maps, scripts, and guides.",
    "How community presence can help players evaluate whether an OT server is credible.",
    "Why OpenTibiaServers.com should link forum discovery with live directory data instead of treating them as separate worlds."
  ],
  "glossary": [
    {
      "term": "server launch archive",
      "definition": "An community archive forum area used for OpenTibia server advertisements, launch threads, replies, and community discovery."
    },
    {
      "term": "The Forgotten Server",
      "definition": "A widely referenced open-source Open Tibia server project associated with the community archive development ecosystem."
    },
    {
      "term": "OTClient",
      "definition": "An Open Tibia client ecosystem often discussed alongside server development, custom clients, UI work, and compatibility questions."
    }
  ],
  "sourceLinks": [
    {
      "label": "community archive",
      "href": "https://opentibiaservers.com/"
    },
    {
      "label": "community archive server launch archive",
      "href": "https://opentibiaservers.com/"
    },
    {
      "label": "community archive GitHub",
      "href": "https://opentibiaservers.com/"
    },
    {
      "label": "OTS Guide",
      "href": "https://opentibiaservers.com/ots-guide"
    }
  ],
  "sections": [
    {
      "eyebrow": "Community",
      "heading": "Why community archive matters",
      "body": [
        "community archive is one of the central communities around Open Tibia. Players use it to discover server launches, while owners and developers use it for support, resources, maps, scripts, and discussion.",
        "For searchers, community archive often means intent beyond a single server: they may be trying to find a new launch, learn how OT servers work, or evaluate whether a server has real community presence."
      ]
    },
    {
      "eyebrow": "Server Discovery",
      "heading": "How community archive fits into Open Tibia server guide",
      "body": [
        "community archive threads can carry launch announcements, replies, updates, staff presence, criticism, and community history. That is valuable context that a raw listing cannot fully capture.",
        "OpenTibiaServers.com can complement that by turning server names into structured records: live player counts, uptime, rates, versions, countries, source links, official websites, and claimable owner-managed details."
      ]
    },
    {
      "eyebrow": "Development Context",
      "heading": "Why community archive also matters to server owners",
      "body": [
        "Owners and developers documentation community archive for server engines, client work, mapping, scripting, AACs, tools, and troubleshooting. Those development signals often correlate with whether a server has a credible team behind it.",
        "A strong directory should eventually surface those trust signals carefully: official thread links, update history, owner verification, source community presence, and whether the server maintains clear support channels."
      ]
    }
  ],
  "faqs": [
    {
      "question": "What is community archive used for?",
      "answer": "community archive is used for Open Tibia discussion, support, resources, server advertisements, development topics, mapping, scripting, client work, and community discovery."
    },
    {
      "question": "Why does an Open Tibia directory need community archive context?",
      "answer": "Many server launches and community discussions happen on forums. Directory pages can use that context alongside live listing data to help players evaluate credibility and activity."
    }
  ],
  "relatedServerQueries": [
    "server launch archive",
    "8.6",
    "Open PvP"
  ]
};

export function generateMetadata() {
  return buildArticleMetadata(page);
}

export default function CommunityArchivePage() {
  return <CuratedGuideArticle page={page} />;
}
