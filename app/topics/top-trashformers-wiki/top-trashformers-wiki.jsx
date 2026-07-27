import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-trashformers-wiki');
}

export default function TopTrashformersWikiKeywordPage() {
  return <StaticKeywordPage slug="top-trashformers-wiki" />;
}
