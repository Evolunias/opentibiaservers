import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nostalther-private-server');
}

export default function WithReviewsNostaltherPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nostalther-private-server" />;
}
