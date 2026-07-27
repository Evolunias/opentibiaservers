import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-fresh-start-server-brazil');
}

export default function EmpirebrFreshStartServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="empirebr-fresh-start-server-brazil" />;
}
