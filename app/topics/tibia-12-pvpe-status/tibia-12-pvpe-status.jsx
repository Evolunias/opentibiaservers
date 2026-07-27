import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-pvpe-status');
}

export default function Tibia12PvpeStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-pvpe-status" />;
}
