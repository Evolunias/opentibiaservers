import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-with-reviews-server-north-america');
}

export default function ImperianicWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-with-reviews-server-north-america" />;
}
