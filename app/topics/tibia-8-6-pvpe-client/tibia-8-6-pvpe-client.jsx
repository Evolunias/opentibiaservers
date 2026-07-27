import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-pvpe-client');
}

export default function Tibia86PvpeClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-pvpe-client" />;
}
