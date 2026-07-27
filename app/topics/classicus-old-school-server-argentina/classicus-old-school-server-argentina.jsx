import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-old-school-server-argentina');
}

export default function ClassicusOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="classicus-old-school-server-argentina" />;
}
