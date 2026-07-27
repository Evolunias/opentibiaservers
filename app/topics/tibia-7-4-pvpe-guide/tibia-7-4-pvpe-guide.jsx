import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-pvpe-guide');
}

export default function Tibia74PvpeGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-pvpe-guide" />;
}
