import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-exp-rate');
}

export default function ShadowcoresExpRateKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-exp-rate" />;
}
