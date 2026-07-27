import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-old-school-server-poland');
}

export default function TrashformersOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="trashformers-old-school-server-poland" />;
}
