import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-trashformers-official');
}

export default function CurrentTrashformersOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-trashformers-official" />;
}
