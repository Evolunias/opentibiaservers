import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-trashformers-register');
}

export default function FreshStartTrashformersRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-trashformers-register" />;
}
