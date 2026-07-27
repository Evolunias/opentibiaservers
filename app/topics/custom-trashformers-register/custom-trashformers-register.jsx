import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-trashformers-register');
}

export default function CustomTrashformersRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-trashformers-register" />;
}
