import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-coxaot-register');
}

export default function ActiveCoxaotRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-coxaot-register" />;
}
