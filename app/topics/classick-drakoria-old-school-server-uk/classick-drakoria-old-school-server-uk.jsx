import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-old-school-server-uk');
}

export default function ClassickDrakoriaOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-old-school-server-uk" />;
}
