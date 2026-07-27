import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-saintsot-website');
}

export default function WithReviewsSaintsotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-saintsot-website" />;
}
