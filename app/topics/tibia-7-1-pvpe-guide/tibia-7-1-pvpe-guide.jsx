import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-pvpe-guide');
}

export default function Tibia71PvpeGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-pvpe-guide" />;
}
