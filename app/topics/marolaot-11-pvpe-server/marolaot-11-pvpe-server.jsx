import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-11-pvpe-server');
}

export default function Marolaot11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-11-pvpe-server" />;
}
