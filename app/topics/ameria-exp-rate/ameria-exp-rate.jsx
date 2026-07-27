import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-exp-rate');
}

export default function AmeriaExpRateKeywordPage() {
  return <StaticKeywordPage slug="ameria-exp-rate" />;
}
