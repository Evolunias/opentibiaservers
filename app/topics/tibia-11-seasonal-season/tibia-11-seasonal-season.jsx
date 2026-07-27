import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-seasonal-season');
}

export default function Tibia11SeasonalSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-seasonal-season" />;
}
