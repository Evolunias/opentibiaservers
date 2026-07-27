import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-pvpe-season');
}

export default function Tibia81PvpeSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-pvpe-season" />;
}
