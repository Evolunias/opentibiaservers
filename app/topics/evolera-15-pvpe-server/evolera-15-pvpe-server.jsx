import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-15-pvpe-server');
}

export default function Evolera15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-15-pvpe-server" />;
}
