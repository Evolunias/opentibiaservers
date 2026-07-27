import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-reviews-server-france');
}

export default function LumineraWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-reviews-server-france" />;
}
