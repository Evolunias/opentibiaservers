import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-pvpe-status');
}

export default function Tibia96PvpeStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-pvpe-status" />;
}
