import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-old-school-server-germany');
}

export default function ClassickDrakoriaOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-old-school-server-germany" />;
}
