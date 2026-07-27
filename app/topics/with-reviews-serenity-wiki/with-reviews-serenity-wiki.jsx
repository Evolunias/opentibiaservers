import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-serenity-wiki');
}

export default function WithReviewsSerenityWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-serenity-wiki" />;
}
