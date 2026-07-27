import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nto-star-wiki');
}

export default function TopNtoStarWikiKeywordPage() {
  return <StaticKeywordPage slug="top-nto-star-wiki" />;
}
