import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-8-4-pvpe-server');
}

export default function Thornia84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-8-4-pvpe-server" />;
}
