import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-old-school-server-usa');
}

export default function EmpirebrOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-old-school-server-usa" />;
}
