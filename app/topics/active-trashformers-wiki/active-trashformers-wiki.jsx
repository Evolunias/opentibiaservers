import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-trashformers-wiki');
}

export default function ActiveTrashformersWikiKeywordPage() {
  return <StaticKeywordPage slug="active-trashformers-wiki" />;
}
