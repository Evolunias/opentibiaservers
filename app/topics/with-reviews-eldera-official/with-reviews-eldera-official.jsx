import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-eldera-official');
}

export default function WithReviewsElderaOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-eldera-official" />;
}
