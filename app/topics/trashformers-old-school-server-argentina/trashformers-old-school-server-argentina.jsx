import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-old-school-server-argentina');
}

export default function TrashformersOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-old-school-server-argentina" />;
}
