import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-mist-of-death-wiki');
}

export default function NewSeasonMistOfDeathWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-mist-of-death-wiki" />;
}
