import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-screenshots-review');
}

export default function Tibia15WithScreenshotsReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-screenshots-review" />;
}
