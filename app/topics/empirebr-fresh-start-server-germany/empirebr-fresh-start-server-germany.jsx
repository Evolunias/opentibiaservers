import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-fresh-start-server-germany');
}

export default function EmpirebrFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="empirebr-fresh-start-server-germany" />;
}
