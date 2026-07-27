import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-pvpe-ot-server');
}

export default function Tibia71PvpeOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-pvpe-ot-server" />;
}
