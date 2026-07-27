import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-10-0-pvpe-server');
}

export default function Realesta100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-10-0-pvpe-server" />;
}
