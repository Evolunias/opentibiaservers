import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-review');
}

export default function RealestaReviewKeywordPage() {
  return <StaticKeywordPage slug="realesta-review" />;
}
