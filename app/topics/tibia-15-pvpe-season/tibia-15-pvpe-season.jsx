import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-pvpe-season');
}

export default function Tibia15PvpeSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-pvpe-season" />;
}
