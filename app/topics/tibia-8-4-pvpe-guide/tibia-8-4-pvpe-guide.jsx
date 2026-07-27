import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-pvpe-guide');
}

export default function Tibia84PvpeGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-pvpe-guide" />;
}
