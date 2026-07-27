import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-1-pvpe-server');
}

export default function Evolera71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-1-pvpe-server" />;
}
