import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-8-54-pvpe-server');
}

export default function Thornia854PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-8-54-pvpe-server" />;
}
