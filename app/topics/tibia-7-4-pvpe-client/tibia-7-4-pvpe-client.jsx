import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-pvpe-client');
}

export default function Tibia74PvpeClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-pvpe-client" />;
}
