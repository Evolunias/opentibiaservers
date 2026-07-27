import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-old-school-server-uk');
}

export default function TrashformersOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="trashformers-old-school-server-uk" />;
}
