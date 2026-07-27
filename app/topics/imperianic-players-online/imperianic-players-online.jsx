import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-players-online');
}

export default function ImperianicPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="imperianic-players-online" />;
}
