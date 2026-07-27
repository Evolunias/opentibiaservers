import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-trashformers-rules');
}

export default function OldSchoolTrashformersRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-trashformers-rules" />;
}
