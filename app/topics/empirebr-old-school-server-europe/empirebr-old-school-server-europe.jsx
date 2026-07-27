import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-old-school-server-europe');
}

export default function EmpirebrOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="empirebr-old-school-server-europe" />;
}
