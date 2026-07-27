import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-evo-server-latin-america');
}

export default function CanobEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-evo-server-latin-america" />;
}
