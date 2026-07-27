import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-exp-rate');
}

export default function MiracleExpRateKeywordPage() {
  return <StaticKeywordPage slug="miracle-exp-rate" />;
}
