import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-exp-rate');
}

export default function EvoleraExpRateKeywordPage() {
  return <StaticKeywordPage slug="evolera-exp-rate" />;
}
