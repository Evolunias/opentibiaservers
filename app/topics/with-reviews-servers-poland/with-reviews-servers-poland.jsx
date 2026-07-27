import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-servers-poland');
}

export default function WithReviewsServersPolandKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-servers-poland" />;
}
