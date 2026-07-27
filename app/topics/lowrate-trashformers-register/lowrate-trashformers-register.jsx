import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-trashformers-register');
}

export default function LowrateTrashformersRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-trashformers-register" />;
}
