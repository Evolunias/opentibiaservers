import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-fresh-start-server-europe');
}

export default function EmpirebrFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="empirebr-fresh-start-server-europe" />;
}
