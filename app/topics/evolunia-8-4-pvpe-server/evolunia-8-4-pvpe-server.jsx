import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-4-pvpe-server');
}

export default function Evolunia84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-4-pvpe-server" />;
}
