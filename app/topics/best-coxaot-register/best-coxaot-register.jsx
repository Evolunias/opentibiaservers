import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-coxaot-register');
}

export default function BestCoxaotRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-coxaot-register" />;
}
