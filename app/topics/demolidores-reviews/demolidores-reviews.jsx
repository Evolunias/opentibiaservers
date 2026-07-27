import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-reviews');
}

export default function DemolidoresReviewsKeywordPage() {
  return <StaticKeywordPage slug="demolidores-reviews" />;
}
