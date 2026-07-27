import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-10-0-pvpe-server');
}

export default function Tibiame100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-10-0-pvpe-server" />;
}
