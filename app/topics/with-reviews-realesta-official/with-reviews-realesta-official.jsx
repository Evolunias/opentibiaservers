import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-realesta-official');
}

export default function WithReviewsRealestaOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-realesta-official" />;
}
