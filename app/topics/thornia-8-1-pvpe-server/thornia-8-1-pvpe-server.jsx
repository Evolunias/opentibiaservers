import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-8-1-pvpe-server');
}

export default function Thornia81PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-8-1-pvpe-server" />;
}
