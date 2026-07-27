import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-old-school-server-brazil');
}

export default function ClassickDrakoriaOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-old-school-server-brazil" />;
}
