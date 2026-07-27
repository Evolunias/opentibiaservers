import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-seasonal-season');
}

export default function Tibia74SeasonalSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-seasonal-season" />;
}
