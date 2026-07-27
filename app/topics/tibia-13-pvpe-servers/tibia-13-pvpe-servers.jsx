import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-pvpe-servers');
}

export default function Tibia13PvpeServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-pvpe-servers" />;
}
