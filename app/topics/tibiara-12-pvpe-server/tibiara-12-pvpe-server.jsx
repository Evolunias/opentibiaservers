import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-12-pvpe-server');
}

export default function Tibiara12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-12-pvpe-server" />;
}
