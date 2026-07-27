import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-6-pvpe-server');
}

export default function Evolunia76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-6-pvpe-server" />;
}
