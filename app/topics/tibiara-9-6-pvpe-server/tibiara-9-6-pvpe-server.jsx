import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-9-6-pvpe-server');
}

export default function Tibiara96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-9-6-pvpe-server" />;
}
