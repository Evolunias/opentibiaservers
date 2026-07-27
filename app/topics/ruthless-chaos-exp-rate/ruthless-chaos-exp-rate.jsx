import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-exp-rate');
}

export default function RuthlessChaosExpRateKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-exp-rate" />;
}
