import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-review');
}

export default function ElderaReviewKeywordPage() {
  return <StaticKeywordPage slug="eldera-review" />;
}
