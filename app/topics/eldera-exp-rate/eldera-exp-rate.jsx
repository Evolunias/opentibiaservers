import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-exp-rate');
}

export default function ElderaExpRateKeywordPage() {
  return <StaticKeywordPage slug="eldera-exp-rate" />;
}
