import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-with-screenshots-review');
}

export default function Tibia86WithScreenshotsReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-with-screenshots-review" />;
}
