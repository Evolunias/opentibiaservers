import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-old-school-server-germany');
}

export default function ClassicusOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="classicus-old-school-server-germany" />;
}
