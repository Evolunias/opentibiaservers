import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-empirebr-register');
}

export default function BestEmpirebrRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-empirebr-register" />;
}
