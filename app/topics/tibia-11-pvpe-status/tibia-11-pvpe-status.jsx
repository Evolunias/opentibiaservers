import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvpe-status');
}

export default function Tibia11PvpeStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvpe-status" />;
}
