import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-pvpe-season');
}

export default function Tibia1098PvpeSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-pvpe-season" />;
}
