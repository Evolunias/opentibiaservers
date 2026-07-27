import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvpe-client');
}

export default function Tibia11PvpeClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvpe-client" />;
}
