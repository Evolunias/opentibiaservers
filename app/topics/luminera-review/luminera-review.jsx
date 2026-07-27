import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-review');
}

export default function LumineraReviewKeywordPage() {
  return <StaticKeywordPage slug="luminera-review" />;
}
