import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-0-pvpe-server');
}

export default function Realesta80PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-0-pvpe-server" />;
}
