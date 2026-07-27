import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-old-school-server-france');
}

export default function ClassickDrakoriaOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-old-school-server-france" />;
}
