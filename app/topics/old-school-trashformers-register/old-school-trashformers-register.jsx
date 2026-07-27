import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-trashformers-register');
}

export default function OldSchoolTrashformersRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-trashformers-register" />;
}
