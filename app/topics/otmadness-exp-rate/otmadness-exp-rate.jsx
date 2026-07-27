import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-exp-rate');
}

export default function OtmadnessExpRateKeywordPage() {
  return <StaticKeywordPage slug="otmadness-exp-rate" />;
}
