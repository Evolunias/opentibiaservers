import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-old-school-server-sweden');
}

export default function EmpirebrOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="empirebr-old-school-server-sweden" />;
}
