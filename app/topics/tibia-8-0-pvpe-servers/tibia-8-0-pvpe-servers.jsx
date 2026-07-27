import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-pvpe-servers');
}

export default function Tibia80PvpeServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-pvpe-servers" />;
}
