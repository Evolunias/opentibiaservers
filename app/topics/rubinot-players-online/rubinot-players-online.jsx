import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-players-online');
}

export default function RubinotPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="rubinot-players-online" />;
}
