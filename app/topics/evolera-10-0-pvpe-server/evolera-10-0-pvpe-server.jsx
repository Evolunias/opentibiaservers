import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-10-0-pvpe-server');
}

export default function Evolera100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-10-0-pvpe-server" />;
}
