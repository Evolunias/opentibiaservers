import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-9-6-pvpe-server');
}

export default function Marolaot96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-9-6-pvpe-server" />;
}
