import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-demolidores-official');
}

export default function WithReviewsDemolidoresOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-demolidores-official" />;
}
