import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-1-pvpe-server');
}

export default function Thornia71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-1-pvpe-server" />;
}
