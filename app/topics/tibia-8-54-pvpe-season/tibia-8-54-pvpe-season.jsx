import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-pvpe-season');
}

export default function Tibia854PvpeSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-pvpe-season" />;
}
