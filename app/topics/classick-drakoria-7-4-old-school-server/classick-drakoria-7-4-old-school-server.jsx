import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-7-4-old-school-server');
}

export default function ClassickDrakoria74OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-7-4-old-school-server" />;
}
