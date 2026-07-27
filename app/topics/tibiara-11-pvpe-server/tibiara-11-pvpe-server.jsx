import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-11-pvpe-server');
}

export default function Tibiara11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-11-pvpe-server" />;
}
