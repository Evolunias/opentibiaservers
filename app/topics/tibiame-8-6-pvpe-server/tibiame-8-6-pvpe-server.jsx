import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-6-pvpe-server');
}

export default function Tibiame86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-6-pvpe-server" />;
}
