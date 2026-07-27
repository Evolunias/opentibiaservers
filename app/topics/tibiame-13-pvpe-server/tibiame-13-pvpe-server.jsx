import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-13-pvpe-server');
}

export default function Tibiame13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-13-pvpe-server" />;
}
