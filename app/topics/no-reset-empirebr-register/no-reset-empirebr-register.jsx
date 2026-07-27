import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-empirebr-register');
}

export default function NoResetEmpirebrRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-empirebr-register" />;
}
