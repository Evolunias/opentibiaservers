import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-blazera-server');
}

export default function WithReviewsBlazeraServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-blazera-server" />;
}
