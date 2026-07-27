import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-evo-server-latin-america');
}

export default function ShadowcoresEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-evo-server-latin-america" />;
}
