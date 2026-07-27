import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-archlight');
}

export default function WithReviewsArchlightKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-archlight" />;
}
