import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-7-6-pvpe-server');
}

export default function Marolaot76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-7-6-pvpe-server" />;
}
