import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-15-pvpe-server');
}

export default function Marolaot15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-15-pvpe-server" />;
}
