import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-15-pvpe-server');
}

export default function Tibiara15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-15-pvpe-server" />;
}
