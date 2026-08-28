import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "community_archive-gala-redream-otserver-7-6-l-custom-mechanics",
  "slug": "redream-otserver-7-6-l-custom-mechanics",
  "name": "ReDream OTServer 7.6 l CUSTOM MECHANICS",
  "host": "redream.online",
  "ip": "redream.online",
  "port": 7171,
  "location": "USA",
  "version": "7.6",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 40,
  "source": "community_archive",
  "source_id": "https://opentibiaservers.com/",
  "source_url": "https://opentibiaservers.com/",
  "website_url": "https://redream.online/latestnews.php",
  "external_launch_url": "https://redream.online/latestnews.php",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "ReDream OTServer 7.6 l CUSTOM MECHANICS",
  "template_name": "community_archive_source_reference",
  "updated_at": "2026-07-28T02:51:25.691Z",
  "last_seen_at": "2026-01-11T23:47:24+0100",
  "last_check": "2026-07-28T02:51:25.691Z",
  "official_summary": "ReDream OTServer 7.6 l CUSTOM MECHANICS enters the directory through a real community_archive server launch archive thread rather than an invented listing. The surviving record provides region hint: USA, version hint: 7.6, server address: redream.online, port 7171, official website reachable during import, 23 replies, 4,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "ReDream OTServer 7.6 l CUSTOM MECHANICS is preserved through its community_archive server launch archive trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: community_archive server launch archive thread",
    "Official website/AAC: https://redream.online/latestnews.php",
    "Official website responded with HTTP 200",
    "Server address: redream.online",
    "Server port: 7171",
    "Thread author: frenetik",
    "Original post date: 1/12/2026",
    "Forum discussion: 23 replies",
    "Thread visibility: 4,000 views",
    "Parsed version/client hint: 7.6",
    "Parsed region hint: USA"
  ],
  "tags": [
    "community_archive server launch archive",
    "community thread",
    "USA",
    "7.6",
    "USA",
    "CUSTOM"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://redream.online/latestnews.php",
      "label": "ReDream OTServer 7.6 l CUSTOM MECHANICS official website"
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
      "url": "https://redream.online/latestnews.php",
      "label": "https://redream.online/latestnews.php"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/97fbda0c4621f79bf17d8cf882f0b15d",
      "label": "VirusTotal"
    }
  ],
  "faq_items": [
    {
      "question": "Is ReDream OTServer 7.6 l CUSTOM MECHANICS verified?",
      "answer": "This page verifies that a matching community_archive server launch archive thread exists and that the thread exposes https://redream.online/latestnews.php as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm ReDream OTServer 7.6 l CUSTOM MECHANICS?",
      "answer": "Start with https://redream.online/latestnews.php and the linked community_archive thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "ReDream OTServer 7.6 l CUSTOM MECHANICS exposes https://redream.online/latestnews.php from its community_archive server launch archive source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function RedreamOtserver76LCustomMechanicsPage() {
  return <CuratedGuideArticle page={page} />;
}
