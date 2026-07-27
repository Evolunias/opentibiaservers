import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-evo-server-latin-america');
}

export default function ThaisotEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-evo-server-latin-america" />;
}
