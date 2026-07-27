import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-players-online-sweden');
}

export default function SeasonalPlayersOnlineSwedenKeywordPage() {
  return <StaticKeywordPage slug="seasonal-players-online-sweden" />;
}
