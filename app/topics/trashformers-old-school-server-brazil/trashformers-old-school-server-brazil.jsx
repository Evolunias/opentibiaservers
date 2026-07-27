import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-old-school-server-brazil');
}

export default function TrashformersOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="trashformers-old-school-server-brazil" />;
}
