import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-10-0-pvpe-server');
}

export default function Marolaot100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-10-0-pvpe-server" />;
}
