import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-high-exp-server-canada');
}

export default function AmeriaHighExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="ameria-high-exp-server-canada" />;
}
