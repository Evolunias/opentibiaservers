import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-72-pvpe-server');
}

export default function Realesta772PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-72-pvpe-server" />;
}
