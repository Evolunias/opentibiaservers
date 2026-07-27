import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-empirebr-wiki');
}

export default function WithReviewsEmpirebrWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-empirebr-wiki" />;
}
