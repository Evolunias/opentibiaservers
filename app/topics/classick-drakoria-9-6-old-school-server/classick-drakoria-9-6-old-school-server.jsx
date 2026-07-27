import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-9-6-old-school-server');
}

export default function ClassickDrakoria96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-9-6-old-school-server" />;
}
