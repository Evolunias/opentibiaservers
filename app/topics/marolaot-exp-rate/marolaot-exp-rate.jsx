import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-exp-rate');
}

export default function MarolaotExpRateKeywordPage() {
  return <StaticKeywordPage slug="marolaot-exp-rate" />;
}
