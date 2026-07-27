import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-54-old-school-server');
}

export default function ClassickDrakoria854OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-54-old-school-server" />;
}
