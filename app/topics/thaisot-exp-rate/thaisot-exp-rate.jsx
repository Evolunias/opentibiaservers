import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-exp-rate');
}

export default function ThaisotExpRateKeywordPage() {
  return <StaticKeywordPage slug="thaisot-exp-rate" />;
}
