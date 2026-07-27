import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-1-pvpe-server');
}

export default function Tibiame81PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-1-pvpe-server" />;
}
