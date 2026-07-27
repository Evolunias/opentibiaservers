import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-1-pvpe-server');
}

export default function Realera71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-1-pvpe-server" />;
}
