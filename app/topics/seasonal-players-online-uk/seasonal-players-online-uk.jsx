import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-players-online-uk');
}

export default function SeasonalPlayersOnlineUkKeywordPage() {
  return <StaticKeywordPage slug="seasonal-players-online-uk" />;
}
