import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-seasonal-season');
}

export default function Tibia71SeasonalSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-seasonal-season" />;
}
