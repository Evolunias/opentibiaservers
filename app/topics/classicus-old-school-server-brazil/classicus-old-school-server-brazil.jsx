import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-old-school-server-brazil');
}

export default function ClassicusOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="classicus-old-school-server-brazil" />;
}
