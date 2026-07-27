import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-pvpe-ot-server');
}

export default function Tibia15PvpeOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-pvpe-ot-server" />;
}
