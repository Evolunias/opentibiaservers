import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-12-pvpe-server');
}

export default function Marolaot12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-12-pvpe-server" />;
}
