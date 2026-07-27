import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-review');
}

export default function TibiascapeReviewKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-review" />;
}
