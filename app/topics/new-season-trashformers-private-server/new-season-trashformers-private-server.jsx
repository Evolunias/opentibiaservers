import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-trashformers-private-server');
}

export default function NewSeasonTrashformersPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-trashformers-private-server" />;
}
