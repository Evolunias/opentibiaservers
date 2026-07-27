import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-pvpe-ot-server');
}

export default function Tibia81PvpeOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-pvpe-ot-server" />;
}
