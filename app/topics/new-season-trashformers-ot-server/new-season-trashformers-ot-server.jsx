import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-trashformers-ot-server');
}

export default function NewSeasonTrashformersOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-trashformers-ot-server" />;
}
