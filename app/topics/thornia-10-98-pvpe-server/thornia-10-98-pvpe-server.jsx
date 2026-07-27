import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-10-98-pvpe-server');
}

export default function Thornia1098PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-10-98-pvpe-server" />;
}
