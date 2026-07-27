import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-high-exp-server-brazil');
}

export default function CoxaotHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="coxaot-high-exp-server-brazil" />;
}
