import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-old-school-server-brazil');
}

export default function EmpirebrOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="empirebr-old-school-server-brazil" />;
}
