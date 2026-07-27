import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-saintsot-wiki');
}

export default function WithReviewsSaintsotWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-saintsot-wiki" />;
}
