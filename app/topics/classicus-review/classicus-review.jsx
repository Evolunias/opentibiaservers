import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-review');
}

export default function ClassicusReviewKeywordPage() {
  return <StaticKeywordPage slug="classicus-review" />;
}
