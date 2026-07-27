import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-pvpe-servers');
}

export default function Tibia84PvpeServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-pvpe-servers" />;
}
