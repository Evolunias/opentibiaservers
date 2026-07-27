import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-pvpe-server');
}

export default function Tibia13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-pvpe-server" />;
}
