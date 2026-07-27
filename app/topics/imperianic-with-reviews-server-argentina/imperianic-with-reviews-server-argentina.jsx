import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-with-reviews-server-argentina');
}

export default function ImperianicWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-with-reviews-server-argentina" />;
}
