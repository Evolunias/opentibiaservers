import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-players-online');
}

export default function TibiaraPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibiara-players-online" />;
}
