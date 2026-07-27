import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-pvpe-servers');
}

export default function Tibia86PvpeServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-pvpe-servers" />;
}
