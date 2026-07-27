import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-players-online-poland');
}

export default function SeasonalPlayersOnlinePolandKeywordPage() {
  return <StaticKeywordPage slug="seasonal-players-online-poland" />;
}
