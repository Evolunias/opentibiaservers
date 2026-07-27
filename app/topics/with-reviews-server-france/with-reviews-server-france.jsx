import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-server-france');
}

export default function WithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-server-france" />;
}
