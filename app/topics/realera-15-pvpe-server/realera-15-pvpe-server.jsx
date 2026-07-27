import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-15-pvpe-server');
}

export default function Realera15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="realera-15-pvpe-server" />;
}
