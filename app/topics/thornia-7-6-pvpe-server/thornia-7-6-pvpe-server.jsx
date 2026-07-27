import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-6-pvpe-server');
}

export default function Thornia76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-6-pvpe-server" />;
}
