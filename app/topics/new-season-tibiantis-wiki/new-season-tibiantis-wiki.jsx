import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiantis-wiki');
}

export default function NewSeasonTibiantisWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiantis-wiki" />;
}
