import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-with-screenshots-review');
}

export default function Tibia772WithScreenshotsReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-with-screenshots-review" />;
}
