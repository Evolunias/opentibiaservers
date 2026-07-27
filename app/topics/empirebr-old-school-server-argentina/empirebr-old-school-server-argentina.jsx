import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-old-school-server-argentina');
}

export default function EmpirebrOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-old-school-server-argentina" />;
}
