import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-trashformers-register');
}

export default function NewSeasonTrashformersRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-trashformers-register" />;
}
