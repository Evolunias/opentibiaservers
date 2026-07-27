import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-evo-server-latin-america');
}

export default function TibiascapeEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-evo-server-latin-america" />;
}
