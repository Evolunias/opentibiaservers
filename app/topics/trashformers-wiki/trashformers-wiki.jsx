import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-wiki');
}

export default function TrashformersWikiKeywordPage() {
  return <StaticKeywordPage slug="trashformers-wiki" />;
}
