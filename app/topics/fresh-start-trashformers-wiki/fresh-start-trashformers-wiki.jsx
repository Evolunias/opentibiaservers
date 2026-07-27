import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-trashformers-wiki');
}

export default function FreshStartTrashformersWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-trashformers-wiki" />;
}
