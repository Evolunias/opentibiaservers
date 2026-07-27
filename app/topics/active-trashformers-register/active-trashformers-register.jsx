import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-trashformers-register');
}

export default function ActiveTrashformersRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-trashformers-register" />;
}
