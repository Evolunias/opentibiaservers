import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-seasonal-guide');
}

export default function Tibia74SeasonalGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-seasonal-guide" />;
}
