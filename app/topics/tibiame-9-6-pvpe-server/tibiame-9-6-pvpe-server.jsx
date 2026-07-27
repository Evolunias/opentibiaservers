import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-9-6-pvpe-server');
}

export default function Tibiame96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-9-6-pvpe-server" />;
}
