import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-seasonal-guide');
}

export default function Tibia100SeasonalGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-seasonal-guide" />;
}
