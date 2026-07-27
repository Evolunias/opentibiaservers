import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-old-school-server-mexico');
}

export default function EmpirebrOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="empirebr-old-school-server-mexico" />;
}
