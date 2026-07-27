import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvpe-season');
}

export default function Tibia11PvpeSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvpe-season" />;
}
