import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-pvpe-client');
}

export default function Tibia80PvpeClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-pvpe-client" />;
}
