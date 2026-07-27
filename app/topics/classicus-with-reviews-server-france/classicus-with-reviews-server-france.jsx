import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-reviews-server-france');
}

export default function ClassicusWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-reviews-server-france" />;
}
