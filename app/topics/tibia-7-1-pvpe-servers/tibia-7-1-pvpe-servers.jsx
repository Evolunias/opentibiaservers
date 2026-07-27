import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-pvpe-servers');
}

export default function Tibia71PvpeServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-pvpe-servers" />;
}
