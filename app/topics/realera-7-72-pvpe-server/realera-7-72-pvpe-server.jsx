import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-72-pvpe-server');
}

export default function Realera772PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-72-pvpe-server" />;
}
