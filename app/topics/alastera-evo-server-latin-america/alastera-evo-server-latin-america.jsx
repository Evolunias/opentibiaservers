import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-evo-server-latin-america');
}

export default function AlasteraEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-evo-server-latin-america" />;
}
