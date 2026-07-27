import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvpe-server');
}

export default function Tibia11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvpe-server" />;
}
