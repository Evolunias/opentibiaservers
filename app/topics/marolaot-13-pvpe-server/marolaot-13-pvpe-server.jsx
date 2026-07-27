import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-13-pvpe-server');
}

export default function Marolaot13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-13-pvpe-server" />;
}
