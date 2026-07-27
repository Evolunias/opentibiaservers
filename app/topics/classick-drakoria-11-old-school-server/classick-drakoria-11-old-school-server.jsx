import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-11-old-school-server');
}

export default function ClassickDrakoria11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-11-old-school-server" />;
}
