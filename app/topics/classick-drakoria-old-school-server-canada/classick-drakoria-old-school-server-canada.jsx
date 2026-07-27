import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-old-school-server-canada');
}

export default function ClassickDrakoriaOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-old-school-server-canada" />;
}
