import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-evo-server-latin-america');
}

export default function CalmeraOtEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-evo-server-latin-america" />;
}
