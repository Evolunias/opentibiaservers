import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-register');
}

export default function TrashformersRegisterKeywordPage() {
  return <StaticKeywordPage slug="trashformers-register" />;
}
