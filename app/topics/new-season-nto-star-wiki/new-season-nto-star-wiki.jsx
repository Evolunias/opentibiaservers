import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nto-star-wiki');
}

export default function NewSeasonNtoStarWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-nto-star-wiki" />;
}
