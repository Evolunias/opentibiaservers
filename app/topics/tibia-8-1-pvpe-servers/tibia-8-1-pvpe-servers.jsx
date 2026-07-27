import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-pvpe-servers');
}

export default function Tibia81PvpeServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-pvpe-servers" />;
}
