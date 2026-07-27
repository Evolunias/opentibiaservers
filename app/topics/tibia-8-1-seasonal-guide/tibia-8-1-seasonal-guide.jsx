import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-seasonal-guide');
}

export default function Tibia81SeasonalGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-seasonal-guide" />;
}
