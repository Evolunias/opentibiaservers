import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-pvpe-client');
}

export default function Tibia854PvpeClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-pvpe-client" />;
}
