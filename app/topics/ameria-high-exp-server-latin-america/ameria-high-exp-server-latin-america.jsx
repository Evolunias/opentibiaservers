import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-high-exp-server-latin-america');
}

export default function AmeriaHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-high-exp-server-latin-america" />;
}
