import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-7-4-pvpe-server');
}

export default function Marolaot74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-7-4-pvpe-server" />;
}
