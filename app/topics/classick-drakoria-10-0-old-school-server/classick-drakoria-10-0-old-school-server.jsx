import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-10-0-old-school-server');
}

export default function ClassickDrakoria100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-10-0-old-school-server" />;
}
