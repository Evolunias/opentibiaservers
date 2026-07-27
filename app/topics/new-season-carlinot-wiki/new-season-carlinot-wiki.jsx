import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-carlinot-wiki');
}

export default function NewSeasonCarlinotWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-carlinot-wiki" />;
}
