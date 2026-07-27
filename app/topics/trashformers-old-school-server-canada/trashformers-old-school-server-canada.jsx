import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-old-school-server-canada');
}

export default function TrashformersOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-old-school-server-canada" />;
}
