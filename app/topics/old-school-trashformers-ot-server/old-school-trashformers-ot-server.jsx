import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-trashformers-ot-server');
}

export default function OldSchoolTrashformersOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-trashformers-ot-server" />;
}
