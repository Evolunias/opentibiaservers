import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-classicus-server');
}

export default function WithReviewsClassicusServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-classicus-server" />;
}
