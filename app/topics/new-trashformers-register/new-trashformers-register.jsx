import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-trashformers-register');
}

export default function NewTrashformersRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-trashformers-register" />;
}
