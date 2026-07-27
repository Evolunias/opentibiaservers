import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-with-screenshots-players-online');
}

export default function Tibia74WithScreenshotsPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-with-screenshots-players-online" />;
}
