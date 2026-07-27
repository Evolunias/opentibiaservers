import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-empirebr-register');
}

export default function CustomEmpirebrRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-empirebr-register" />;
}
