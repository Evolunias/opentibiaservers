import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-4-pvpe-server');
}

export default function Evolunia74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-4-pvpe-server" />;
}
