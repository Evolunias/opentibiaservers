import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-exp-rate');
}

export default function MadnessaliveExpRateKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-exp-rate" />;
}
