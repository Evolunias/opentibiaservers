import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nostalther-official');
}

export default function WithReviewsNostaltherOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nostalther-official" />;
}
