import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-seasonal-guide');
}

export default function Tibia772SeasonalGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-seasonal-guide" />;
}
