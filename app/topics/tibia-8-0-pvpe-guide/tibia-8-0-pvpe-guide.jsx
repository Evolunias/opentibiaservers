import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-pvpe-guide');
}

export default function Tibia80PvpeGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-pvpe-guide" />;
}
