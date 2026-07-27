import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-7-6-pvpe-server');
}

export default function Tibiame76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-7-6-pvpe-server" />;
}
