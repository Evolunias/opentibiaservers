import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-pvpe-ot-server');
}

export default function Tibia96PvpeOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-pvpe-ot-server" />;
}
