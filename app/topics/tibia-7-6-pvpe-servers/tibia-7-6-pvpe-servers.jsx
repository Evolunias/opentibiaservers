import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-pvpe-servers');
}

export default function Tibia76PvpeServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-pvpe-servers" />;
}
