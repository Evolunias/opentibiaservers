import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-with-reviews-server-france');
}

export default function UnlineWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="unline-with-reviews-server-france" />;
}
