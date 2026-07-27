import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiascape-wiki');
}

export default function NewSeasonTibiascapeWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiascape-wiki" />;
}
