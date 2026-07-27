import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-pvpe-client');
}

export default function Tibia96PvpeClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-pvpe-client" />;
}
