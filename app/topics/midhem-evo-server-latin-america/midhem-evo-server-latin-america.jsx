import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-evo-server-latin-america');
}

export default function MidhemEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-evo-server-latin-america" />;
}
