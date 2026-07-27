import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-review-france');
}

export default function EvoReviewFranceKeywordPage() {
  return <StaticKeywordPage slug="evo-review-france" />;
}
