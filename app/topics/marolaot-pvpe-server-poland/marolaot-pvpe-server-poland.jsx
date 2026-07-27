import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-pvpe-server-poland');
}

export default function MarolaotPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="marolaot-pvpe-server-poland" />;
}
