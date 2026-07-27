import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-old-school-server-france');
}

export default function ClassicusOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="classicus-old-school-server-france" />;
}
