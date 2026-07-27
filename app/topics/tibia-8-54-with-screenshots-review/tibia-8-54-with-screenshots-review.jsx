import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-with-screenshots-review');
}

export default function Tibia854WithScreenshotsReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-with-screenshots-review" />;
}
