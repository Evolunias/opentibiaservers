import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-seasonal-guide');
}

export default function Tibia11SeasonalGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-seasonal-guide" />;
}
