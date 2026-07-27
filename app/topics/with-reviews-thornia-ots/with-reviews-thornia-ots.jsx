import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-thornia-ots');
}

export default function WithReviewsThorniaOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-thornia-ots" />;
}
