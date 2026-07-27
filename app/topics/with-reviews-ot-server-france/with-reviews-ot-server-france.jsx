import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ot-server-france');
}

export default function WithReviewsOtServerFranceKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ot-server-france" />;
}
