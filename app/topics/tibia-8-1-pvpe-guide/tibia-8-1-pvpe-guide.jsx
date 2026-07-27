import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-pvpe-guide');
}

export default function Tibia81PvpeGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-pvpe-guide" />;
}
