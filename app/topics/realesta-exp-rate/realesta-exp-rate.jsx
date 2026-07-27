import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-exp-rate');
}

export default function RealestaExpRateKeywordPage() {
  return <StaticKeywordPage slug="realesta-exp-rate" />;
}
