import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-with-reviews-server-mexico');
}

export default function ImperianicWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="imperianic-with-reviews-server-mexico" />;
}
