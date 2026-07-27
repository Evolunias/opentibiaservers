import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-13-old-school-server');
}

export default function ClassickDrakoria13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-13-old-school-server" />;
}
