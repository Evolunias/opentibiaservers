import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-thornia-wiki');
}

export default function NewSeasonThorniaWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-thornia-wiki" />;
}
