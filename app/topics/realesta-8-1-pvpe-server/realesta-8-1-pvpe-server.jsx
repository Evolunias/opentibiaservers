import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-1-pvpe-server');
}

export default function Realesta81PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-1-pvpe-server" />;
}
