import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-trashformers-wiki');
}

export default function BestTrashformersWikiKeywordPage() {
  return <StaticKeywordPage slug="best-trashformers-wiki" />;
}
