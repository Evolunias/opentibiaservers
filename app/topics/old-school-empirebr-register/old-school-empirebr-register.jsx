import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-empirebr-register');
}

export default function OldSchoolEmpirebrRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-empirebr-register" />;
}
