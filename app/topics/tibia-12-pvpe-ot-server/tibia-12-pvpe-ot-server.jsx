import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-pvpe-ot-server');
}

export default function Tibia12PvpeOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-pvpe-ot-server" />;
}
