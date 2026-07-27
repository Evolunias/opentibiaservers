import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-evo-server-brazil');
}

export default function ThaisotEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="thaisot-evo-server-brazil" />;
}
