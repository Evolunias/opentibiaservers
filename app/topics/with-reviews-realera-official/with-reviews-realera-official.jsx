import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-realera-official');
}

export default function WithReviewsRealeraOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-realera-official" />;
}
