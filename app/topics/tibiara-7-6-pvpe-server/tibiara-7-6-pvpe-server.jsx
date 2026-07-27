import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-6-pvpe-server');
}

export default function Tibiara76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-6-pvpe-server" />;
}
