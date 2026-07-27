import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-trashformers-register');
}

export default function HighrateTrashformersRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-trashformers-register" />;
}
