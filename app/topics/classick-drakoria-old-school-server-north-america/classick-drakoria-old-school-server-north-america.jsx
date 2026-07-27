import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-old-school-server-north-america');
}

export default function ClassickDrakoriaOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-old-school-server-north-america" />;
}
