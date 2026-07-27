import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-10-98-old-school-server');
}

export default function ClassickDrakoria1098OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-10-98-old-school-server" />;
}
