import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-trashformers-client');
}

export default function OldSchoolTrashformersClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-trashformers-client" />;
}
