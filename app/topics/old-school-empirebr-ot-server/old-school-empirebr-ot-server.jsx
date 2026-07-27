import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-empirebr-ot-server');
}

export default function OldSchoolEmpirebrOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-empirebr-ot-server" />;
}
