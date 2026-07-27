import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-14-old-school-server');
}

export default function ClassickDrakoria14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-14-old-school-server" />;
}
