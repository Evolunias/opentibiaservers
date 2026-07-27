import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-pvpe-guide');
}

export default function Tibia772PvpeGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-pvpe-guide" />;
}
