import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-blazera-ot');
}

export default function WithReviewsBlazeraOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-blazera-ot" />;
}
