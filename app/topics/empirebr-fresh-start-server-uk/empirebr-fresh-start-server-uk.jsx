import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-fresh-start-server-uk');
}

export default function EmpirebrFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="empirebr-fresh-start-server-uk" />;
}
