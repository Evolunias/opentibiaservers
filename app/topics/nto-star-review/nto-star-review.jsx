import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-review');
}

export default function NtoStarReviewKeywordPage() {
  return <StaticKeywordPage slug="nto-star-review" />;
}
