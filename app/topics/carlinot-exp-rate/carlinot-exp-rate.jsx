import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-exp-rate');
}

export default function CarlinotExpRateKeywordPage() {
  return <StaticKeywordPage slug="carlinot-exp-rate" />;
}
