import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-old-school-server-france');
}

export default function TrashformersOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="trashformers-old-school-server-france" />;
}
