import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-old-school-server-south-america');
}

export default function ClassicusOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-old-school-server-south-america" />;
}
