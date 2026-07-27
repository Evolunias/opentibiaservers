import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-old-school-server-mexico');
}

export default function TrashformersOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="trashformers-old-school-server-mexico" />;
}
