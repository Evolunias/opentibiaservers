import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-old-school-server-mexico');
}

export default function ClassicusOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="classicus-old-school-server-mexico" />;
}
