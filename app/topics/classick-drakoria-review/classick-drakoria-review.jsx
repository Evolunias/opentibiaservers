import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-review');
}

export default function ClassickDrakoriaReviewKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-review" />;
}
