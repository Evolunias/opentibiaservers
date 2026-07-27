import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-old-school-server-poland');
}

export default function ClassickDrakoriaOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-old-school-server-poland" />;
}
