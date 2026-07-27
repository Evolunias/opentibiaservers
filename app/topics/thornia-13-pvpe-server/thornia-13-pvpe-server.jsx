import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-13-pvpe-server');
}

export default function Thornia13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-13-pvpe-server" />;
}
