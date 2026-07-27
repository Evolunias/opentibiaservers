import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-14-pvpe-server');
}

export default function Marolaot14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-14-pvpe-server" />;
}
