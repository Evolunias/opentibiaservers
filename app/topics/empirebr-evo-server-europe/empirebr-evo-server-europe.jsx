import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-evo-server-europe');
}

export default function EmpirebrEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="empirebr-evo-server-europe" />;
}
