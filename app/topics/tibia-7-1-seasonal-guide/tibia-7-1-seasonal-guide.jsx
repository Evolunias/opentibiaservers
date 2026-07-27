import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-seasonal-guide');
}

export default function Tibia71SeasonalGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-seasonal-guide" />;
}
