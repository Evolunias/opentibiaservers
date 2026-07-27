import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-fresh-start-server-brazil');
}

export default function CoxaotFreshStartServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="coxaot-fresh-start-server-brazil" />;
}
