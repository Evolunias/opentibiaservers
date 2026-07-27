import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-6-pvpe-server');
}

export default function Tibiara86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-6-pvpe-server" />;
}
