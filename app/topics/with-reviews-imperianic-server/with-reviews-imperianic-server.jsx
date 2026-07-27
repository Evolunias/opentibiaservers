import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-imperianic-server');
}

export default function WithReviewsImperianicServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-imperianic-server" />;
}
