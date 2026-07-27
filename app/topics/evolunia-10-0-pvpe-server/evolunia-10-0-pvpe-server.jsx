import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-10-0-pvpe-server');
}

export default function Evolunia100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-10-0-pvpe-server" />;
}
