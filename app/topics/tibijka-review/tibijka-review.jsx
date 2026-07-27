import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-review');
}

export default function TibijkaReviewKeywordPage() {
  return <StaticKeywordPage slug="tibijka-review" />;
}
