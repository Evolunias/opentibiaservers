import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-pvpe-season');
}

export default function Tibia71PvpeSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-pvpe-season" />;
}
