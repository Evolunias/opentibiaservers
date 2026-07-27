import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-saintsot');
}

export default function WithReviewsSaintsotKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-saintsot" />;
}
