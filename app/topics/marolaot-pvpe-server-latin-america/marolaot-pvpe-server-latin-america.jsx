import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-pvpe-server-latin-america');
}

export default function MarolaotPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-pvpe-server-latin-america" />;
}
