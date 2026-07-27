import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-14-pvpe-server');
}

export default function Tibiame14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-14-pvpe-server" />;
}
