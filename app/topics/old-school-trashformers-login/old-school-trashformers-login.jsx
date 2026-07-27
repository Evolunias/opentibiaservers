import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-trashformers-login');
}

export default function OldSchoolTrashformersLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-trashformers-login" />;
}
