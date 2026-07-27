import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-old-school-server-mexico');
}

export default function ClassickDrakoriaOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-old-school-server-mexico" />;
}
