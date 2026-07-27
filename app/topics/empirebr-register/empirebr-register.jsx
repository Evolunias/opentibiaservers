import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-register');
}

export default function EmpirebrRegisterKeywordPage() {
  return <StaticKeywordPage slug="empirebr-register" />;
}
