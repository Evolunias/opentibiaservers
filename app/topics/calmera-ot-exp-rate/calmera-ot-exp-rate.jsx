import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-exp-rate');
}

export default function CalmeraOtExpRateKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-exp-rate" />;
}
