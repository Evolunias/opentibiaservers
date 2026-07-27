import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-seasonal-guide');
}

export default function Tibia15SeasonalGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-seasonal-guide" />;
}
