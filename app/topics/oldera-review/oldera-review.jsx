import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-review');
}

export default function OlderaReviewKeywordPage() {
  return <StaticKeywordPage slug="oldera-review" />;
}
