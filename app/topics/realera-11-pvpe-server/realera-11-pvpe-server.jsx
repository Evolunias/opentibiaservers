import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-11-pvpe-server');
}

export default function Realera11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="realera-11-pvpe-server" />;
}
