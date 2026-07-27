import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-noxiousot-wiki');
}

export default function WithReviewsNoxiousotWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-noxiousot-wiki" />;
}
