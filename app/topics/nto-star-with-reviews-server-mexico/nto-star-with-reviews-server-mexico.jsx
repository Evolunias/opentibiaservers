import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-with-reviews-server-mexico');
}

export default function NtoStarWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="nto-star-with-reviews-server-mexico" />;
}
