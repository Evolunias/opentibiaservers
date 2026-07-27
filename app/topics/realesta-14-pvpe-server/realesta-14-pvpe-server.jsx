import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-14-pvpe-server');
}

export default function Realesta14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-14-pvpe-server" />;
}
