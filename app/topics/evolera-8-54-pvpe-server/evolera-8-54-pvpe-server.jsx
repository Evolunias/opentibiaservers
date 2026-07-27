import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-54-pvpe-server');
}

export default function Evolera854PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-54-pvpe-server" />;
}
