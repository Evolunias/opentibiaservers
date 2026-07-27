import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-12-old-school-server');
}

export default function ClassickDrakoria12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-12-old-school-server" />;
}
