import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-the-nexus-world-a-new-era",
  "slug": "the-nexus-world-a-new-era",
  "name": "The Nexus World: A New Era",
  "host": "n-v.me",
  "ip": "n-v.me",
  "port": 7171,
  "location": "USA",
  "version": "10.98",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 88,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/usa-10-98-the-nexus-world-a-new-era.303605/",
  "source_url": "https://otland.net/threads/usa-10-98-the-nexus-world-a-new-era.303605/",
  "website_url": "https://n-v.me/nexus/",
  "external_launch_url": "https://n-v.me/nexus/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "The Nexus World: A New Era",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:27.139Z",
  "last_seen_at": "2026-01-03T22:49:59+0100",
  "last_check": "2026-07-28T02:51:27.139Z",
  "official_summary": "The Nexus World: A New Era enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: USA, version hint: 10.98, server address: n-v.me, port 7171, 36 replies, 4,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "The Nexus World: A New Era is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://n-v.me/nexus/",
    "Server address: n-v.me",
    "Server port: 7171",
    "Thread author: ~X~",
    "Original post date: 1/4/2026",
    "Forum discussion: 36 replies",
    "Thread visibility: 4,000 views",
    "Parsed version/client hint: 10.98",
    "Parsed region hint: USA"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "USA",
    "10.98",
    "USA",
    "10.98"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://n-v.me/nexus/",
      "label": "The Nexus World: A New Era official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/usa-10-98-the-nexus-world-a-new-era.303605/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://n-v.me/nexus/",
      "label": "https://n-v.me/nexus/"
    },
    {
      "type": "source_link",
      "url": "https://imgur.com/ZL8LbpG",
      "label": "https://imgur.com/ZL8LbpG"
    },
    {
      "type": "source_link",
      "url": "https://imgur.com/R0ZeMlE",
      "label": "https://imgur.com/R0ZeMlE"
    },
    {
      "type": "source_link",
      "url": "https://imgur.com/MfyjcBU",
      "label": "https://imgur.com/MfyjcBU"
    },
    {
      "type": "source_link",
      "url": "https://imgur.com/blTxpOL",
      "label": "https://imgur.com/blTxpOL"
    },
    {
      "type": "source_link",
      "url": "https://imgur.com/kspbgDy",
      "label": "https://imgur.com/kspbgDy"
    }
  ],
  "faq_items": [
    {
      "question": "Is The Nexus World: A New Era verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://n-v.me/nexus/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm The Nexus World: A New Era?",
      "answer": "Start with https://n-v.me/nexus/ and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "The Nexus World: A New Era exposes https://n-v.me/nexus/ from its OtLand Server Gala source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
    },
    {
      "title": "Public media and screenshot leads",
      "body": "The source thread includes public media links that may contain screenshots, launch graphics, videos, or gameplay previews: https://imgur.com/ZL8LbpG, https://imgur.com/R0ZeMlE, https://imgur.com/MfyjcBU, https://imgur.com/blTxpOL, https://imgur.com/kspbgDy, https://imgur.com/GneJeuX. These should be linked for attribution unless the owner grants permission to mirror assets locally."
    },
    {
      "title": "Why this OtLand source matters",
      "body": "OtLand Server Gala is one of the longest-running community advertising boards for Open Tibia servers. A thread there can preserve launch positioning, owner updates, community replies, screenshots, and player discussion that a compact server-list row cannot show."
    },
    {
      "title": "What this page still needs from the community",
      "body": "This record should be expanded with owner-confirmed homepage links, screenshots, client/download details, rates, PvP rules, update history, Discord or forum links, and player reviews. Until those are verified, the page keeps source facts separate from missing details."
    }
  ]
};

export function generateMetadata() {
  return buildArticleMetadata(page);
}

export default function TheNexusWorldANewEraServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
