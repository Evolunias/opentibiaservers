import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nto-star-wiki');
}

export default function PopularNtoStarWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-nto-star-wiki" />;
}
