import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-players-online');
}

export default function OriginaltibiaPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-players-online" />;
}
