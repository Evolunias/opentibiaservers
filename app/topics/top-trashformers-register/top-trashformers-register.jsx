import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-trashformers-register');
}

export default function TopTrashformersRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-trashformers-register" />;
}
