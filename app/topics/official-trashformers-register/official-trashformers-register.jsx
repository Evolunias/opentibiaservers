import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-trashformers-register');
}

export default function OfficialTrashformersRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-trashformers-register" />;
}
