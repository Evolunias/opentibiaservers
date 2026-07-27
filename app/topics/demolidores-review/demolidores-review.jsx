import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-review');
}

export default function DemolidoresReviewKeywordPage() {
  return <StaticKeywordPage slug="demolidores-review" />;
}
