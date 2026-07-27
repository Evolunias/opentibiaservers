import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-seasonal-guide');
}

export default function Tibia86SeasonalGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-seasonal-guide" />;
}
