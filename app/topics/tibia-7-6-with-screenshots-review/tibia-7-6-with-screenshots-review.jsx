import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-with-screenshots-review');
}

export default function Tibia76WithScreenshotsReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-with-screenshots-review" />;
}
