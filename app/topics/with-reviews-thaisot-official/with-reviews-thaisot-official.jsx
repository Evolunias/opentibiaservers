import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-thaisot-official');
}

export default function WithReviewsThaisotOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-thaisot-official" />;
}
