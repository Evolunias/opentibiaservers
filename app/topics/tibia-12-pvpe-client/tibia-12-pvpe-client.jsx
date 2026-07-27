import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-pvpe-client');
}

export default function Tibia12PvpeClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-pvpe-client" />;
}
