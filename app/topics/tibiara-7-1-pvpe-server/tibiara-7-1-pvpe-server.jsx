import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-1-pvpe-server');
}

export default function Tibiara71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-1-pvpe-server" />;
}
