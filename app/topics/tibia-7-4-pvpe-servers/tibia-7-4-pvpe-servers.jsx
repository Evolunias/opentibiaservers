import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-pvpe-servers');
}

export default function Tibia74PvpeServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-pvpe-servers" />;
}
