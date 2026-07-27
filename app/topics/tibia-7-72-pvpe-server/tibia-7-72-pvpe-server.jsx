import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-pvpe-server');
}

export default function Tibia772PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-pvpe-server" />;
}
