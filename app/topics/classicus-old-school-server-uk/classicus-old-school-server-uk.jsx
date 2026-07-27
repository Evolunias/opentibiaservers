import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-old-school-server-uk');
}

export default function ClassicusOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="classicus-old-school-server-uk" />;
}
