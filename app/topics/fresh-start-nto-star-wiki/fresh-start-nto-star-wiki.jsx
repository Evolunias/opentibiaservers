import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nto-star-wiki');
}

export default function FreshStartNtoStarWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nto-star-wiki" />;
}
