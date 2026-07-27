import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-carlinot-official');
}

export default function WithReviewsCarlinotOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-carlinot-official" />;
}
