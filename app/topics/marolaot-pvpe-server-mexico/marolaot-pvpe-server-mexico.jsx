import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-pvpe-server-mexico');
}

export default function MarolaotPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="marolaot-pvpe-server-mexico" />;
}
