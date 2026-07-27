import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvpe-servers');
}

export default function Tibia11PvpeServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvpe-servers" />;
}
