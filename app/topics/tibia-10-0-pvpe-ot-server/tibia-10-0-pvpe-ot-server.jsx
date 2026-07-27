import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-pvpe-ot-server');
}

export default function Tibia100PvpeOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-pvpe-ot-server" />;
}
