import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-market');
}

export default function CarlinotMarketKeywordPage() {
  return <StaticKeywordPage slug="carlinot-market" />;
}
