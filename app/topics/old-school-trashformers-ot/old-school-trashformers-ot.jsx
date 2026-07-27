import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-trashformers-ot');
}

export default function OldSchoolTrashformersOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-trashformers-ot" />;
}
