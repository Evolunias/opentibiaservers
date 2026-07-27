import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-classick-drakoria-official');
}

export default function WithReviewsClassickDrakoriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-classick-drakoria-official" />;
}
