import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-trashformers-open-tibia');
}

export default function OldSchoolTrashformersOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-trashformers-open-tibia" />;
}
