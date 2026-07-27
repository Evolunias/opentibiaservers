import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-pvpe-client');
}

export default function Tibia100PvpeClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-pvpe-client" />;
}
