import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-old-school-server-north-america');
}

export default function ClassicusOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-old-school-server-north-america" />;
}
