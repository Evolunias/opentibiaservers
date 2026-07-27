import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-4-pvpe-server');
}

export default function Thornia74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-4-pvpe-server" />;
}
