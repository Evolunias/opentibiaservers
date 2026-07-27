import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-kasteria-wiki');
}

export default function NewSeasonKasteriaWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-kasteria-wiki" />;
}
