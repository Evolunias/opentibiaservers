import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-seasonal-guide');
}

export default function Tibia13SeasonalGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-seasonal-guide" />;
}
