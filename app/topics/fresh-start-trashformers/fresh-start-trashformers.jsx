import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-trashformers');
}

export default function FreshStartTrashformersKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-trashformers" />;
}
