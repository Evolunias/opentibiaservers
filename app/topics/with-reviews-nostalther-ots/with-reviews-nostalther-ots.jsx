import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nostalther-ots');
}

export default function WithReviewsNostaltherOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nostalther-ots" />;
}
