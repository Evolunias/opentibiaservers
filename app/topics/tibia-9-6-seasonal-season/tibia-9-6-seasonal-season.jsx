import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-seasonal-season');
}

export default function Tibia96SeasonalSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-seasonal-season" />;
}
