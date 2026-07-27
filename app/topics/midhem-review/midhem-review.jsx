import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-review');
}

export default function MidhemReviewKeywordPage() {
  return <StaticKeywordPage slug="midhem-review" />;
}
