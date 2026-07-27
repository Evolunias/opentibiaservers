import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-11-pvpe-server');
}

export default function Evolunia11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-11-pvpe-server" />;
}
