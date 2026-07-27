import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-trashformers-wiki');
}

export default function CurrentTrashformersWikiKeywordPage() {
  return <StaticKeywordPage slug="current-trashformers-wiki" />;
}
