import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classicus-wiki');
}

export default function NewSeasonClassicusWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-classicus-wiki" />;
}
