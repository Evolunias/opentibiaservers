import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-12-pvpe-server');
}

export default function Thornia12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-12-pvpe-server" />;
}
