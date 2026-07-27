import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-13-pvpe-server');
}

export default function Realera13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="realera-13-pvpe-server" />;
}
