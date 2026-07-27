import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-trashformers-wiki');
}

export default function NewSeasonTrashformersWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-trashformers-wiki" />;
}
