import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-players-online-europe');
}

export default function SeasonalPlayersOnlineEuropeKeywordPage() {
  return <StaticKeywordPage slug="seasonal-players-online-europe" />;
}
