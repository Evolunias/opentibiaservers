import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-exp-rate');
}

export default function EvoluniaExpRateKeywordPage() {
  return <StaticKeywordPage slug="evolunia-exp-rate" />;
}
