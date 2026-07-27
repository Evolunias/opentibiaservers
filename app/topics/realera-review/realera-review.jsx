import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-review');
}

export default function RealeraReviewKeywordPage() {
  return <StaticKeywordPage slug="realera-review" />;
}
