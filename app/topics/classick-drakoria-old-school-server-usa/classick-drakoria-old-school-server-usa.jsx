import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-old-school-server-usa');
}

export default function ClassickDrakoriaOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-old-school-server-usa" />;
}
