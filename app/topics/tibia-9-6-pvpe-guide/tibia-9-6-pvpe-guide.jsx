import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-pvpe-guide');
}

export default function Tibia96PvpeGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-pvpe-guide" />;
}
