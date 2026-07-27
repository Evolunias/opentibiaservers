import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-15-pvpe-server');
}

export default function Realesta15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-15-pvpe-server" />;
}
