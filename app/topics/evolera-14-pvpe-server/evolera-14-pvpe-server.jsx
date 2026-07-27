import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-14-pvpe-server');
}

export default function Evolera14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-14-pvpe-server" />;
}
