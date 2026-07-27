import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-14-pvpe-server');
}

export default function Tibiara14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-14-pvpe-server" />;
}
