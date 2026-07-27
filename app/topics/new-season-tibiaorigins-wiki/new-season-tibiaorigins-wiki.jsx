import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiaorigins-wiki');
}

export default function NewSeasonTibiaoriginsWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiaorigins-wiki" />;
}
