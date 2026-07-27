import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-pvpe-servers');
}

export default function Tibia1098PvpeServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-pvpe-servers" />;
}
