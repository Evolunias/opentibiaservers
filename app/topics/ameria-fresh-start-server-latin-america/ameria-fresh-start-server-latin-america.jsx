import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-fresh-start-server-latin-america');
}

export default function AmeriaFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-fresh-start-server-latin-america" />;
}
