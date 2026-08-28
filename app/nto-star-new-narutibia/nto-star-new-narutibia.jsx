import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "community_archive-gala-nto-star-new-narutibia",
  "slug": "nto-star-new-narutibia",
  "name": "NTO Star New Narutibia",
  "host": "ntostar.online",
  "ip": "ntostar.online",
  "port": 7171,
  "location": "BRAZIL",
  "version": "8",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 63,
  "source": "community_archive",
  "source_id": "https://opentibiaservers.com/",
  "source_url": "https://opentibiaservers.com/",
  "website_url": "https://ntostar.online/",
  "external_launch_url": "https://ntostar.online/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "NTO Star New Narutibia",
  "template_name": "community_archive_source_reference",
  "updated_at": "2026-07-28T02:51:23.275Z",
  "last_seen_at": "2026-07-22T00:53:10+0200",
  "last_check": "2026-07-28T02:51:23.275Z",
  "official_summary": "NTO Star New Narutibia enters the directory through a real community_archive server launch archive thread rather than an invented listing. The surviving record provides region hint: BRAZIL, version hint: 8, server address: ntostar.online, port 7171, official website reachable during import, 5 replies, 340 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "NTO Star New Narutibia is preserved through its community_archive server launch archive trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: community_archive server launch archive thread",
    "Official website/AAC: https://ntostar.online/",
    "Official website responded with HTTP 200",
    "Server address: ntostar.online",
    "Server port: 7171",
    "Thread author: uallasgba123",
    "Original post date: 7/22/2026",
    "Forum discussion: 5 replies",
    "Thread visibility: 340 views",
    "Parsed version/client hint: 8",
    "Parsed region hint: BRAZIL"
  ],
  "tags": [
    "community_archive server launch archive",
    "community thread",
    "BRAZIL",
    "8",
    "BRAZIL",
    "Custom"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://ntostar.online/",
      "label": "NTO Star New Narutibia official website"
    },
    {
      "type": "community_forum",
      "url": "https://opentibiaservers.com/",
      "label": "community_archive server launch archive thread"
    },
    {
      "type": "forum_index",
      "url": "https://opentibiaservers.com/",
      "label": "community_archive server launch archive forum"
    },
    {
      "type": "source_link",
      "url": "https://ntostar.online/",
      "label": "https://ntostar.online/"
    }
  ],
  "faq_items": [
    {
      "question": "Is NTO Star New Narutibia verified?",
      "answer": "This page verifies that a matching community_archive server launch archive thread exists and that the thread exposes https://ntostar.online/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm NTO Star New Narutibia?",
      "answer": "Start with https://ntostar.online/ and the linked community_archive thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "NTO Star New Narutibia exposes https://ntostar.online/ from its community_archive server launch archive source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
    },
    {
      "title": "Why this community_archive source matters",
      "body": "community_archive server launch archive is one of the longest-running community advertising boards for Open Tibia servers. A thread there can preserve launch positioning, owner updates, community replies, screenshots, and player discussion that a compact server-list row cannot show."
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

export default function NtoStarNewNarutibiaPage() {
  return <CuratedGuideArticle page={page} />;
}
