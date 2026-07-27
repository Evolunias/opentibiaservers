import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-exp-rate');
}

export default function OlderaExpRateKeywordPage() {
  return <StaticKeywordPage slug="oldera-exp-rate" />;
}
