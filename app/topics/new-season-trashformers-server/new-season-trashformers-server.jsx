import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-trashformers-server');
}

export default function NewSeasonTrashformersServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-trashformers-server" />;
}
