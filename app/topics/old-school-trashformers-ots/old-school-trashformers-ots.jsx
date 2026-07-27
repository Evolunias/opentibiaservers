import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-trashformers-ots');
}

export default function OldSchoolTrashformersOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-trashformers-ots" />;
}
