import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-old-school-server-canada');
}

export default function EmpirebrOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-old-school-server-canada" />;
}
