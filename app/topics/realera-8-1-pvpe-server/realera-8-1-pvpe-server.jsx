import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-1-pvpe-server');
}

export default function Realera81PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-1-pvpe-server" />;
}
