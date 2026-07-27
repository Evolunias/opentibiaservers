import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-9-6-pvpe-server');
}

export default function Realesta96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-9-6-pvpe-server" />;
}
