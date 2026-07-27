import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-old-school-server-north-america');
}

export default function TrashformersOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-old-school-server-north-america" />;
}
