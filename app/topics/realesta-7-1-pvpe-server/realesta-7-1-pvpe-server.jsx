import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-1-pvpe-server');
}

export default function Realesta71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-1-pvpe-server" />;
}
