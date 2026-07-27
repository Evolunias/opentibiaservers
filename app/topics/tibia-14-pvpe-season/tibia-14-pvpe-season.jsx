import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-pvpe-season');
}

export default function Tibia14PvpeSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-pvpe-season" />;
}
