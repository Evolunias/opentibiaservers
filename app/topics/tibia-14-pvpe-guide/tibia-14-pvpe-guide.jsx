import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-pvpe-guide');
}

export default function Tibia14PvpeGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-pvpe-guide" />;
}
