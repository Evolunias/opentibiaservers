import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-trashformers-register');
}

export default function PopularTrashformersRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-trashformers-register" />;
}
