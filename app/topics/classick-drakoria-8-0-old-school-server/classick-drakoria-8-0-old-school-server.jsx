import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-0-old-school-server');
}

export default function ClassickDrakoria80OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-0-old-school-server" />;
}
