import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-reviews-server-france');
}

export default function NilotWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-reviews-server-france" />;
}
