import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-old-school-server-usa');
}

export default function ClassicusOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="classicus-old-school-server-usa" />;
}
