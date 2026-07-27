import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-empirebr-register');
}

export default function NewEmpirebrRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-empirebr-register" />;
}
