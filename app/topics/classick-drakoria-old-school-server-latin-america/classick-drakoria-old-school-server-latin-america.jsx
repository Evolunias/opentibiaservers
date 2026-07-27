import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-old-school-server-latin-america');
}

export default function ClassickDrakoriaOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-old-school-server-latin-america" />;
}
