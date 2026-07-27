import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-12-pvpe-server');
}

export default function Evolunia12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-12-pvpe-server" />;
}
