import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-4-pvpe-server');
}

export default function Realesta74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-4-pvpe-server" />;
}
