import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-landoria-ots",
  "slug": "landoria-ots",
  "name": "Landoria OTS",
  "host": "landoriaots.pl",
  "ip": "landoriaots.pl",
  "port": 7171,
  "location": "Poland",
  "version": "13",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 42,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/poland-custom-landoria-ots.304377/",
  "source_url": "https://otland.net/threads/poland-custom-landoria-ots.304377/",
  "website_url": "https://www.landoriaots.pl",
  "external_launch_url": "https://www.landoriaots.pl",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Landoria OTS",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:24.241Z",
  "last_seen_at": "2026-04-16T10:58:28+0200",
  "last_check": "2026-07-28T02:51:24.241Z",
  "official_summary": "Landoria OTS enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: Poland, version hint: 13, server address: landoriaots.pl, port 7171, official website reachable during import, 22 replies, 3,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Landoria OTS is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://www.landoriaots.pl",
    "Official website responded with HTTP 200",
    "Server address: landoriaots.pl",
    "Server port: 7171",
    "Thread author: krecikondexin",
    "Original post date: 4/16/2026",
    "Forum discussion: 22 replies",
    "Thread visibility: 3,000 views",
    "Parsed version/client hint: 13",
    "Parsed region hint: Poland"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "Poland",
    "13",
    "Poland",
    "Custom"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://www.landoriaots.pl",
      "label": "Landoria OTS official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/poland-custom-landoria-ots.304377/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://www.landoriaots.pl",
      "label": "https://www.landoriaots.pl"
    },
    {
      "type": "source_link",
      "url": "https://imgur.com/a/4aUaEjz",
      "label": "https://imgur.com/a/4aUaEjz"
    }
  ],
  "faq_items": [
    {
      "question": "Is Landoria OTS verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://www.landoriaots.pl as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Landoria OTS?",
      "answer": "Start with https://www.landoriaots.pl and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Landoria OTS exposes https://www.landoriaots.pl from its OtLand Server Gala source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
    },
    {
      "title": "Public media and screenshot leads",
      "body": "The source thread includes public media links that may contain screenshots, launch graphics, videos, or gameplay previews: https://imgur.com/a/4aUaEjz. These should be linked for attribution unless the owner grants permission to mirror assets locally."
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

export default function LandoriaOtsPage() {
  return <CuratedGuideArticle page={page} />;
}
