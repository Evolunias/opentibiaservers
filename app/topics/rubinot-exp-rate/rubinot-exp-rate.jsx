import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-exp-rate');
}

export default function RubinotExpRateKeywordPage() {
  return <StaticKeywordPage slug="rubinot-exp-rate" />;
}
