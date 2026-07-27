import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-seasonal-season');
}

export default function Tibia854SeasonalSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-seasonal-season" />;
}
