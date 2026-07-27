import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-with-reviews-server-usa');
}

export default function ImperianicWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-with-reviews-server-usa" />;
}
