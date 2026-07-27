import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-pvpe-guide');
}

export default function Tibia76PvpeGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-pvpe-guide" />;
}
