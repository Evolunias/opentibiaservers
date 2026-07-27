import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-old-school-server-germany');
}

export default function EmpirebrOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="empirebr-old-school-server-germany" />;
}
