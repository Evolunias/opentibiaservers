import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-road-to-shinigami",
  "slug": "road-to-shinigami",
  "name": "Road to Shinigami",
  "host": "rtsonline.org",
  "ip": "rtsonline.org",
  "port": 7171,
  "location": "Poland",
  "version": "8.54",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 89,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/poland-custom-road-to-shinigami-seson-8.287956/",
  "source_url": "https://otland.net/threads/poland-custom-road-to-shinigami-seson-8.287956/",
  "website_url": "https://rtsonline.org/",
  "external_launch_url": "https://rtsonline.org/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Road to Shinigami",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:23.277Z",
  "last_seen_at": "2024-02-12T15:32:53+0100",
  "last_check": "2026-07-28T02:51:23.277Z",
  "official_summary": "Road to Shinigami enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: Poland, version hint: 8.54, server address: rtsonline.org, port 7171, 28 replies, 8,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Road to Shinigami is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://rtsonline.org/",
    "Server address: rtsonline.org",
    "Server port: 7171",
    "Thread author: rafaeru",
    "Original post date: 2/12/2024",
    "Forum discussion: 28 replies",
    "Thread visibility: 8,000 views",
    "Parsed version/client hint: 8.54",
    "Parsed region hint: Poland"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "Poland",
    "8.54",
    "Poland",
    "Custom"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://rtsonline.org/",
      "label": "Road to Shinigami official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/poland-custom-road-to-shinigami-seson-8.287956/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://rtsonline.org/",
      "label": "https://rtsonline.org/"
    },
    {
      "type": "source_link",
      "url": "https://github.com/rafaeru97",
      "label": "rafaeru97"
    },
    {
      "type": "source_link",
      "url": "https://imgur.com/Pg0jb9u",
      "label": "https://imgur.com/Pg0jb9u"
    },
    {
      "type": "source_link",
      "url": "https://imgur.com/HCUvyzr",
      "label": "https://imgur.com/HCUvyzr"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/c6a5bddcd645ef406b81d40de90e2beb",
      "label": "VirusTotal"
    }
  ],
  "faq_items": [
    {
      "question": "Is Road to Shinigami verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://rtsonline.org/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Road to Shinigami?",
      "answer": "Start with https://rtsonline.org/ and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Road to Shinigami exposes https://rtsonline.org/ from its OtLand Server Gala source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
    },
    {
      "title": "Public media and screenshot leads",
      "body": "The source thread includes public media links that may contain screenshots, launch graphics, videos, or gameplay previews: https://imgur.com/Pg0jb9u, https://imgur.com/HCUvyzr. These should be linked for attribution unless the owner grants permission to mirror assets locally."
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

export default function RoadToShinigamiServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
