import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-trashformers-register');
}

export default function CurrentTrashformersRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-trashformers-register" />;
}
