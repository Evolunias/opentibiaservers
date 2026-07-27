import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-old-school-server-south-america');
}

export default function ClassickDrakoriaOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-old-school-server-south-america" />;
}
