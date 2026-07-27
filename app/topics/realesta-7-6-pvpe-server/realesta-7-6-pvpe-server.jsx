import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-6-pvpe-server');
}

export default function Realesta76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-6-pvpe-server" />;
}
