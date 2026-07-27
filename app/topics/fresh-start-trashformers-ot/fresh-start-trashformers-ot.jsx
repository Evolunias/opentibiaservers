import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-trashformers-ot');
}

export default function FreshStartTrashformersOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-trashformers-ot" />;
}
