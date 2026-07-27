import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-screenshots-review');
}

export default function Tibia12WithScreenshotsReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-screenshots-review" />;
}
