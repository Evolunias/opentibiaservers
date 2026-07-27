import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-trashformers-official');
}

export default function NewTrashformersOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-trashformers-official" />;
}
