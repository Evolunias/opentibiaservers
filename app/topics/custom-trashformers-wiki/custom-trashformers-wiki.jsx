import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-trashformers-wiki');
}

export default function CustomTrashformersWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-trashformers-wiki" />;
}
