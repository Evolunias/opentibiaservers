import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-oxygenot-official');
}

export default function WithReviewsOxygenotOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-oxygenot-official" />;
}
