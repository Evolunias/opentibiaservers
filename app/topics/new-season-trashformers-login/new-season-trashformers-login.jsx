import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-trashformers-login');
}

export default function NewSeasonTrashformersLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-trashformers-login" />;
}
