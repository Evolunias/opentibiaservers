import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-evo-server-latin-america');
}

export default function AureraGlobalEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-evo-server-latin-america" />;
}
