import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-11-pvpe-server');
}

export default function Realesta11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-11-pvpe-server" />;
}
