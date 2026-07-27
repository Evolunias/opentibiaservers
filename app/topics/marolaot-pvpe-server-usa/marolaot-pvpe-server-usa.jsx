import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-pvpe-server-usa');
}

export default function MarolaotPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-pvpe-server-usa" />;
}
