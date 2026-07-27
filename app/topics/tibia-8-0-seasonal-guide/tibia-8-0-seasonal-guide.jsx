import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-seasonal-guide');
}

export default function Tibia80SeasonalGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-seasonal-guide" />;
}
