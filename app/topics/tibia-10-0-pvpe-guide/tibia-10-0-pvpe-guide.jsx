import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-pvpe-guide');
}

export default function Tibia100PvpeGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-pvpe-guide" />;
}
