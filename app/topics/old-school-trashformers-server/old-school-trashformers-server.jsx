import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-trashformers-server');
}

export default function OldSchoolTrashformersServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-trashformers-server" />;
}
