import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-pvpe-server');
}

export default function Tibia76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-pvpe-server" />;
}
