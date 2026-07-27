import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-trashformers-register');
}

export default function BestTrashformersRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-trashformers-register" />;
}
