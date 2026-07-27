import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nilot-official');
}

export default function WithReviewsNilotOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nilot-official" />;
}
