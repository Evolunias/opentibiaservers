import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-trashformers-register');
}

export default function NoResetTrashformersRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-trashformers-register" />;
}
