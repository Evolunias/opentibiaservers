import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-13-pvpe-server');
}

export default function Evolera13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-13-pvpe-server" />;
}
