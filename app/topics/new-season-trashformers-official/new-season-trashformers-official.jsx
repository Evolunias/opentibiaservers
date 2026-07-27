import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-trashformers-official');
}

export default function NewSeasonTrashformersOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-trashformers-official" />;
}
