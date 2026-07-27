import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-screenshots-review');
}

export default function Tibia11WithScreenshotsReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-screenshots-review" />;
}
