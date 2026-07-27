import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-7-1-pvpe-server');
}

export default function Marolaot71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-7-1-pvpe-server" />;
}
