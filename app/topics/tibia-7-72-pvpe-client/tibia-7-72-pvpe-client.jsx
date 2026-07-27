import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-pvpe-client');
}

export default function Tibia772PvpeClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-pvpe-client" />;
}
