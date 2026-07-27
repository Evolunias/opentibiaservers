import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-with-reviews-server-france');
}

export default function ImperianicWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="imperianic-with-reviews-server-france" />;
}
