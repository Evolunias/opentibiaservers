import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-pvpe-guide');
}

export default function Tibia12PvpeGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-pvpe-guide" />;
}
