import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-register');
}

export default function CoxaotRegisterKeywordPage() {
  return <StaticKeywordPage slug="coxaot-register" />;
}
