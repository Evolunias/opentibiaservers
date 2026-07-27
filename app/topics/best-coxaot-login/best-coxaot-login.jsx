import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-coxaot-login');
}

export default function BestCoxaotLoginKeywordPage() {
  return <StaticKeywordPage slug="best-coxaot-login" />;
}
