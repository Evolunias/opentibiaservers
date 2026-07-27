import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-canob-official');
}

export default function WithReviewsCanobOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-canob-official" />;
}
