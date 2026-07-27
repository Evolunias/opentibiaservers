import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-pvpe-client');
}

export default function Tibia81PvpeClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-pvpe-client" />;
}
