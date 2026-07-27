import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-luminera-ot');
}

export default function WithReviewsLumineraOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-luminera-ot" />;
}
