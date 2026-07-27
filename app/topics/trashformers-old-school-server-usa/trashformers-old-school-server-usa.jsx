import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-old-school-server-usa');
}

export default function TrashformersOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-old-school-server-usa" />;
}
