import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-pvpe-ot-server');
}

export default function Tibia86PvpeOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-pvpe-ot-server" />;
}
