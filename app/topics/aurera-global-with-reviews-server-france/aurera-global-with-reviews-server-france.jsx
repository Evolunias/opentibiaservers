import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-with-reviews-server-france');
}

export default function AureraGlobalWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-with-reviews-server-france" />;
}
