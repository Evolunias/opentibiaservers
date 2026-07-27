import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-low-exp-server-latin-america');
}

export default function AmeriaLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-low-exp-server-latin-america" />;
}
