import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-seasonal-season');
}

export default function Tibia14SeasonalSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-seasonal-season" />;
}
