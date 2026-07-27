import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-pvpe-server');
}

export default function Tibia81PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-pvpe-server" />;
}
