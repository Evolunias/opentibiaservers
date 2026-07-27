import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-evo-server-latin-america');
}

export default function AmeriaEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-evo-server-latin-america" />;
}
