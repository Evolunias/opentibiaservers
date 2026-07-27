import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-pvpe-server-uk');
}

export default function MarolaotPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="marolaot-pvpe-server-uk" />;
}
