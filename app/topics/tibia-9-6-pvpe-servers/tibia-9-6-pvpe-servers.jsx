import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-pvpe-servers');
}

export default function Tibia96PvpeServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-pvpe-servers" />;
}
