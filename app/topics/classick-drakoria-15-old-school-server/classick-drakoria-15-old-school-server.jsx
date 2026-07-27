import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-15-old-school-server');
}

export default function ClassickDrakoria15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-15-old-school-server" />;
}
