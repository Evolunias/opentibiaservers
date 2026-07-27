import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-old-school-server-latin-america');
}

export default function ClassicusOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-old-school-server-latin-america" />;
}
