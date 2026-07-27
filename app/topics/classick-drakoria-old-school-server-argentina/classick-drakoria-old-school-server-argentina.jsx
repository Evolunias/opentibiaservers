import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-old-school-server-argentina');
}

export default function ClassickDrakoriaOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-old-school-server-argentina" />;
}
