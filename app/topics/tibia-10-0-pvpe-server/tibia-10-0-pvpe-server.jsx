import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-pvpe-server');
}

export default function Tibia100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-pvpe-server" />;
}
