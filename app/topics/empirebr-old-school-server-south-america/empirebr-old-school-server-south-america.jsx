import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-old-school-server-south-america');
}

export default function EmpirebrOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-old-school-server-south-america" />;
}
