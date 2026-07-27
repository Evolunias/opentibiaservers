import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-market');
}

export default function ThaisotMarketKeywordPage() {
  return <StaticKeywordPage slug="thaisot-market" />;
}
