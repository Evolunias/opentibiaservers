import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-classicus-ot');
}

export default function WithReviewsClassicusOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-classicus-ot" />;
}
