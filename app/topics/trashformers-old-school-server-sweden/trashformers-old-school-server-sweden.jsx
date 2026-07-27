import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-old-school-server-sweden');
}

export default function TrashformersOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="trashformers-old-school-server-sweden" />;
}
