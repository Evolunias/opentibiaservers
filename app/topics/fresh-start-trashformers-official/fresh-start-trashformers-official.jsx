import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-trashformers-official');
}

export default function FreshStartTrashformersOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-trashformers-official" />;
}
