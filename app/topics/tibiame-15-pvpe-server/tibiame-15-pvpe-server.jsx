import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-15-pvpe-server');
}

export default function Tibiame15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-15-pvpe-server" />;
}
