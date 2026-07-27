import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-with-screenshots-review');
}

export default function Tibia96WithScreenshotsReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-with-screenshots-review" />;
}
