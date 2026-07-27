import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-market');
}

export default function MiracleMarketKeywordPage() {
  return <StaticKeywordPage slug="miracle-market" />;
}
