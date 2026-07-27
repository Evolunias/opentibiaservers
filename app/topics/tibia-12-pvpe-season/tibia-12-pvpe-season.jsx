import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-pvpe-season');
}

export default function Tibia12PvpeSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-pvpe-season" />;
}
