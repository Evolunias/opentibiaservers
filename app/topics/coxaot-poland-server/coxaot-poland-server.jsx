import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-poland-server');
}

export default function CoxaotPolandServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-poland-server" />;
}
