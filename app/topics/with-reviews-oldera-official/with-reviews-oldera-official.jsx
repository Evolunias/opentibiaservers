import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-oldera-official');
}

export default function WithReviewsOlderaOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-oldera-official" />;
}
