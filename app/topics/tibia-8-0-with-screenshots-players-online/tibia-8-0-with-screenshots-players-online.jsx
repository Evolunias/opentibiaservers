import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-with-screenshots-players-online');
}

export default function Tibia80WithScreenshotsPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-with-screenshots-players-online" />;
}
