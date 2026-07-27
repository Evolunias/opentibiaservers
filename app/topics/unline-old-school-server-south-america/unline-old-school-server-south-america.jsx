import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-old-school-server-south-america');
}

export default function UnlineOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-old-school-server-south-america" />;
}
