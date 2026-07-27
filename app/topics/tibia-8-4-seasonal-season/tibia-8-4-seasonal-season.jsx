import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-seasonal-season');
}

export default function Tibia84SeasonalSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-seasonal-season" />;
}
