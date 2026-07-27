import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvpe-guide');
}

export default function Tibia11PvpeGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvpe-guide" />;
}
