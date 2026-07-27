import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-old-school-server-poland');
}

export default function ClassicusOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="classicus-old-school-server-poland" />;
}
