import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-project-antica-classic-tibia",
  "slug": "project-antica-classic-tibia",
  "name": "Project ANTICA, classic Tibia",
  "host": "projectantica.com",
  "ip": "projectantica.com",
  "port": 7171,
  "location": "US EAST",
  "version": "7.4",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 117,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/us-east-7-4-project-antica-classic-tibia.304913/",
  "source_url": "https://otland.net/threads/us-east-7-4-project-antica-classic-tibia.304913/",
  "website_url": "https://projectantica.com/",
  "external_launch_url": "https://projectantica.com/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Project ANTICA, classic Tibia",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:24.241Z",
  "last_seen_at": "2026-07-07T16:40:46+0200",
  "last_check": "2026-07-28T02:51:24.241Z",
  "official_summary": "Project ANTICA, classic Tibia enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: US EAST, version hint: 7.4, server address: projectantica.com, port 7171, 7 replies, 877 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Project ANTICA, classic Tibia is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://projectantica.com/",
    "Server address: projectantica.com",
    "Server port: 7171",
    "Thread author: Marcin89",
    "Original post date: 7/7/2026",
    "Forum discussion: 7 replies",
    "Thread visibility: 877 views",
    "Parsed version/client hint: 7.4",
    "Parsed region hint: US EAST"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "US EAST",
    "7.4",
    "US EAST",
    "7.4"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://projectantica.com/",
      "label": "Project ANTICA, classic Tibia official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/us-east-7-4-project-antica-classic-tibia.304913/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://projectantica.com/",
      "label": "https://projectantica.com/"
    }
  ],
  "faq_items": [
    {
      "question": "Is Project ANTICA, classic Tibia verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://projectantica.com/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Project ANTICA, classic Tibia?",
      "answer": "Start with https://projectantica.com/ and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Project ANTICA, classic Tibia exposes https://projectantica.com/ from its OtLand Server Gala source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function ProjectAnticaClassicTibiaServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
