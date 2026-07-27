import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-54-pvpe-server');
}

export default function Realera854PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-54-pvpe-server" />;
}
