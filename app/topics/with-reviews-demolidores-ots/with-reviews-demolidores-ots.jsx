import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-demolidores-ots');
}

export default function WithReviewsDemolidoresOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-demolidores-ots" />;
}
