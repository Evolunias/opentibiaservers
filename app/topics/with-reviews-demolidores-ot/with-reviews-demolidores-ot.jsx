import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-demolidores-ot');
}

export default function WithReviewsDemolidoresOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-demolidores-ot" />;
}
