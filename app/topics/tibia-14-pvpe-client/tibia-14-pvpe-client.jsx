import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-pvpe-client');
}

export default function Tibia14PvpeClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-pvpe-client" />;
}
