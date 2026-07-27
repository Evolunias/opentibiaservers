import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-pvpe-season');
}

export default function Tibia96PvpeSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-pvpe-season" />;
}
