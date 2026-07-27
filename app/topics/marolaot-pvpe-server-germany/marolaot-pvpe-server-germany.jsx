import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-pvpe-server-germany');
}

export default function MarolaotPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="marolaot-pvpe-server-germany" />;
}
