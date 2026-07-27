import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-blazera-private-server');
}

export default function WithReviewsBlazeraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-blazera-private-server" />;
}
