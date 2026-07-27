import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-10-98-pvpe-server');
}

export default function Realesta1098PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-10-98-pvpe-server" />;
}
