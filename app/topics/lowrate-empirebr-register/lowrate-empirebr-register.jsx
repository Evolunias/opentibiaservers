import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-empirebr-register');
}

export default function LowrateEmpirebrRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-empirebr-register" />;
}
