import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-empirebr-register');
}

export default function ActiveEmpirebrRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-empirebr-register" />;
}
