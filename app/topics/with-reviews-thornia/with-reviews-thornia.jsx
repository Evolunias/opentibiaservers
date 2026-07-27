import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-thornia');
}

export default function WithReviewsThorniaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-thornia" />;
}
