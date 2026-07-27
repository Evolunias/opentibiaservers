import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-6-pvpe-server');
}

export default function Evolera76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-6-pvpe-server" />;
}
