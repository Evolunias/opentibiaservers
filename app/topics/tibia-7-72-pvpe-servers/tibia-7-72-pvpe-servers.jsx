import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-pvpe-servers');
}

export default function Tibia772PvpeServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-pvpe-servers" />;
}
