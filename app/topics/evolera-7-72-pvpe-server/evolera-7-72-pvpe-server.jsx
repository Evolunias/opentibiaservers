import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-72-pvpe-server');
}

export default function Evolera772PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-72-pvpe-server" />;
}
