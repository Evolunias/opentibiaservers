import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-old-school-server-sweden');
}

export default function ClassickDrakoriaOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-old-school-server-sweden" />;
}
