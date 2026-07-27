import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-trashformers-wiki');
}

export default function NewTrashformersWikiKeywordPage() {
  return <StaticKeywordPage slug="new-trashformers-wiki" />;
}
