import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-players-online-germany');
}

export default function SeasonalPlayersOnlineGermanyKeywordPage() {
  return <StaticKeywordPage slug="seasonal-players-online-germany" />;
}
