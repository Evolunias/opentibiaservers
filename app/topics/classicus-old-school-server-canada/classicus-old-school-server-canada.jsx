import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-old-school-server-canada');
}

export default function ClassicusOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="classicus-old-school-server-canada" />;
}
