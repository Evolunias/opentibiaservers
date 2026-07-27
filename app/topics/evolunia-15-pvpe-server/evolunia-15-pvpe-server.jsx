import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-15-pvpe-server');
}

export default function Evolunia15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-15-pvpe-server" />;
}
