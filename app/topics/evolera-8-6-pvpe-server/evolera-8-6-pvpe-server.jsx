import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-6-pvpe-server');
}

export default function Evolera86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-6-pvpe-server" />;
}
