import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-13-pvpe-server');
}

export default function Evolunia13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-13-pvpe-server" />;
}
