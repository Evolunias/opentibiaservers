import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-exp-rate');
}

export default function VenoreotExpRateKeywordPage() {
  return <StaticKeywordPage slug="venoreot-exp-rate" />;
}
