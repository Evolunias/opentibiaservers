import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-11-pvpe-server');
}

export default function Tibiame11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-11-pvpe-server" />;
}
