import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-empirebr-register');
}

export default function CurrentEmpirebrRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-empirebr-register" />;
}
