import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-7-72-old-school-server');
}

export default function ClassickDrakoria772OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-7-72-old-school-server" />;
}
