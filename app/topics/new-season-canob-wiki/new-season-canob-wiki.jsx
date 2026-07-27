import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-canob-wiki');
}

export default function NewSeasonCanobWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-canob-wiki" />;
}
