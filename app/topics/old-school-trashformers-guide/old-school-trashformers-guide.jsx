import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-trashformers-guide');
}

export default function OldSchoolTrashformersGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-trashformers-guide" />;
}
