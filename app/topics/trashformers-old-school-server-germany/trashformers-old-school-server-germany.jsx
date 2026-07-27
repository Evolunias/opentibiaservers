import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-old-school-server-germany');
}

export default function TrashformersOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="trashformers-old-school-server-germany" />;
}
