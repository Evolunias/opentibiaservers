import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-pvpe-server-argentina');
}

export default function MarolaotPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-pvpe-server-argentina" />;
}
