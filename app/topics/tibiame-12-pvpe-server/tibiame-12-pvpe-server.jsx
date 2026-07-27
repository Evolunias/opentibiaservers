import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-12-pvpe-server');
}

export default function Tibiame12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-12-pvpe-server" />;
}
