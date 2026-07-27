import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-pvpe-status');
}

export default function Tibia76PvpeStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-pvpe-status" />;
}
