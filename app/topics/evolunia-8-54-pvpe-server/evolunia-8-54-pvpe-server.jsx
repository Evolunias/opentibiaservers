import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-54-pvpe-server');
}

export default function Evolunia854PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-54-pvpe-server" />;
}
