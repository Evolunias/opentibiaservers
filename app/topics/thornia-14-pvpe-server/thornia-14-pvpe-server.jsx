import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-14-pvpe-server');
}

export default function Thornia14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-14-pvpe-server" />;
}
