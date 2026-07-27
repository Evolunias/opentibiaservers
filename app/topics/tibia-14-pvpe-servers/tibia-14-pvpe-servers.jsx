import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-pvpe-servers');
}

export default function Tibia14PvpeServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-pvpe-servers" />;
}
