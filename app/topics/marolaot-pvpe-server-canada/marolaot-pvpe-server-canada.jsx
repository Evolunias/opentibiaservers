import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-pvpe-server-canada');
}

export default function MarolaotPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-pvpe-server-canada" />;
}
