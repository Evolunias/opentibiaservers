import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-trashformers-tibia');
}

export default function OldSchoolTrashformersTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-trashformers-tibia" />;
}
