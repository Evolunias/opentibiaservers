import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-72-pvpe-server');
}

export default function Thornia772PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-72-pvpe-server" />;
}
