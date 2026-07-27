import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-players-online-usa');
}

export default function SeasonalPlayersOnlineUsaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-players-online-usa" />;
}
