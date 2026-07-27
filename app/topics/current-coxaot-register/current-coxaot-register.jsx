import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-coxaot-register');
}

export default function CurrentCoxaotRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-coxaot-register" />;
}
