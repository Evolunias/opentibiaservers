import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-9-6-pvpe-server');
}

export default function Evolunia96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-9-6-pvpe-server" />;
}
