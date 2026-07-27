import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-evo-servers-brazil');
}

export default function ThaisotEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="thaisot-evo-servers-brazil" />;
}
