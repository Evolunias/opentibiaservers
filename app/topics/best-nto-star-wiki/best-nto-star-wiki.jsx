import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nto-star-wiki');
}

export default function BestNtoStarWikiKeywordPage() {
  return <StaticKeywordPage slug="best-nto-star-wiki" />;
}
