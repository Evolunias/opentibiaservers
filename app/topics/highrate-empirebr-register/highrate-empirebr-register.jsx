import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-empirebr-register');
}

export default function HighrateEmpirebrRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-empirebr-register" />;
}
