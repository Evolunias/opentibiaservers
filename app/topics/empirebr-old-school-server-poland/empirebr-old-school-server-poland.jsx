import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-old-school-server-poland');
}

export default function EmpirebrOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="empirebr-old-school-server-poland" />;
}
