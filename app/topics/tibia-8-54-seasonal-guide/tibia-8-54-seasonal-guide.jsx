import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-seasonal-guide');
}

export default function Tibia854SeasonalGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-seasonal-guide" />;
}
