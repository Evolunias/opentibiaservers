import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-review');
}

export default function ThorniaReviewKeywordPage() {
  return <StaticKeywordPage slug="thornia-review" />;
}
