import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-evo-server-latin-america');
}

export default function OxygenotEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-evo-server-latin-america" />;
}
