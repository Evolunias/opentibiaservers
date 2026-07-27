import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-low-exp-server-brazil');
}

export default function CoxaotLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="coxaot-low-exp-server-brazil" />;
}
