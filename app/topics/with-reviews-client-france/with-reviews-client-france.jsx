import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-client-france');
}

export default function WithReviewsClientFranceKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-client-france" />;
}
