import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-pvpe-season');
}

export default function Tibia74PvpeSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-pvpe-season" />;
}
