import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-trashformers-private-server');
}

export default function OldSchoolTrashformersPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-trashformers-private-server" />;
}
