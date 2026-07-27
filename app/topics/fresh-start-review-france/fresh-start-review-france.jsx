import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-review-france');
}

export default function FreshStartReviewFranceKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-review-france" />;
}
