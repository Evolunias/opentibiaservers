import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-12-pvpe-server');
}

export default function Realera12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="realera-12-pvpe-server" />;
}
