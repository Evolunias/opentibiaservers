import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-evo-server-latin-america');
}

export default function ImperianicEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-evo-server-latin-america" />;
}
