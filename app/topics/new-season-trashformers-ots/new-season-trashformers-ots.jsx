import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-trashformers-ots');
}

export default function NewSeasonTrashformersOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-trashformers-ots" />;
}
