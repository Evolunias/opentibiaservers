import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-canob-server');
}

export default function SeasonalCanobServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-canob-server" />;
}
