import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-seasonal-guide');
}

export default function Tibia14SeasonalGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-seasonal-guide" />;
}
