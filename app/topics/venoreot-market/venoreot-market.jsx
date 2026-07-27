import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-market');
}

export default function VenoreotMarketKeywordPage() {
  return <StaticKeywordPage slug="venoreot-market" />;
}
