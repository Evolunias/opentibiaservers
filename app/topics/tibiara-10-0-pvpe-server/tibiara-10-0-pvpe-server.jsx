import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-10-0-pvpe-server');
}

export default function Tibiara100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-10-0-pvpe-server" />;
}
