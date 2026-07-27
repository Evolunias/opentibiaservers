import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-old-school-server-north-america');
}

export default function EmpirebrOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-old-school-server-north-america" />;
}
