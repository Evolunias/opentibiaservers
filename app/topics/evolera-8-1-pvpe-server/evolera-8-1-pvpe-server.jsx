import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-1-pvpe-server');
}

export default function Evolera81PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-1-pvpe-server" />;
}
