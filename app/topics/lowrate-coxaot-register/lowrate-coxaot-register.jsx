import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-coxaot-register');
}

export default function LowrateCoxaotRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-coxaot-register" />;
}
