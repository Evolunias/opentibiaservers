import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-with-reviews-server-france');
}

export default function NtoStarWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nto-star-with-reviews-server-france" />;
}
