import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-pvpe-servers');
}

export default function Tibia12PvpeServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-pvpe-servers" />;
}
