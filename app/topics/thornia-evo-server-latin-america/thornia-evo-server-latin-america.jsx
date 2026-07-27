import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-evo-server-latin-america');
}

export default function ThorniaEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-evo-server-latin-america" />;
}
