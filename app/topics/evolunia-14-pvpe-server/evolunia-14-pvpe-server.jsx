import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-14-pvpe-server');
}

export default function Evolunia14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-14-pvpe-server" />;
}
