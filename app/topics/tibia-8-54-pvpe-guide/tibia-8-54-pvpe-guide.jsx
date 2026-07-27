import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-pvpe-guide');
}

export default function Tibia854PvpeGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-pvpe-guide" />;
}
