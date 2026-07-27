import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-pvpe-server');
}

export default function Tibia854PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-pvpe-server" />;
}
