import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-yurots-wiki');
}

export default function NewSeasonYurotsWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-yurots-wiki" />;
}
