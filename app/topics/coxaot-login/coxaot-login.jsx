import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-login');
}

export default function CoxaotLoginKeywordPage() {
  return <StaticKeywordPage slug="coxaot-login" />;
}
