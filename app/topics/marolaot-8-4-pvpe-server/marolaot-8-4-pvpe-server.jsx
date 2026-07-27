import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-8-4-pvpe-server');
}

export default function Marolaot84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-8-4-pvpe-server" />;
}
