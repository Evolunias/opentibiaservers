import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-seasonal-season');
}

export default function Tibia76SeasonalSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-seasonal-season" />;
}
