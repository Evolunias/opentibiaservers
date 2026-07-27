import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-pvpe-servers');
}

export default function Tibia15PvpeServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-pvpe-servers" />;
}
