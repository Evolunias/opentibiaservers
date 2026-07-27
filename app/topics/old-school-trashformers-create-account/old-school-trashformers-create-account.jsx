import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-trashformers-create-account');
}

export default function OldSchoolTrashformersCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-trashformers-create-account" />;
}
