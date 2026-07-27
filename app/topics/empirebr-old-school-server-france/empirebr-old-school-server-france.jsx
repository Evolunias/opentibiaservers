import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-old-school-server-france');
}

export default function EmpirebrOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="empirebr-old-school-server-france" />;
}
