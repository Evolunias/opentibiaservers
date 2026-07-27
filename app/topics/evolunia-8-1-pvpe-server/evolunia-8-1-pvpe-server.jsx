import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-1-pvpe-server');
}

export default function Evolunia81PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-1-pvpe-server" />;
}
