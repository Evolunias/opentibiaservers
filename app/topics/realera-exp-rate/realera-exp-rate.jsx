import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-exp-rate');
}

export default function RealeraExpRateKeywordPage() {
  return <StaticKeywordPage slug="realera-exp-rate" />;
}
