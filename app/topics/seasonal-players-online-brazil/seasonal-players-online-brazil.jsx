import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-players-online-brazil');
}

export default function SeasonalPlayersOnlineBrazilKeywordPage() {
  return <StaticKeywordPage slug="seasonal-players-online-brazil" />;
}
