import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-pvpe-client');
}

export default function Tibia13PvpeClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-pvpe-client" />;
}
