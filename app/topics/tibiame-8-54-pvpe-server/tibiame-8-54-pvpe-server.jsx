import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-54-pvpe-server');
}

export default function Tibiame854PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-54-pvpe-server" />;
}
