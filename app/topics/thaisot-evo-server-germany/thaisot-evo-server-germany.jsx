import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-evo-server-germany');
}

export default function ThaisotEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="thaisot-evo-server-germany" />;
}
