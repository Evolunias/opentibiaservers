import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-old-school-server-europe');
}

export default function TrashformersOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="trashformers-old-school-server-europe" />;
}
