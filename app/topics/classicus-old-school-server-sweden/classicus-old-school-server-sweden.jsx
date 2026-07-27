import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-old-school-server-sweden');
}

export default function ClassicusOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="classicus-old-school-server-sweden" />;
}
