import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-evo-server-latin-america');
}

export default function TibijkaEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-evo-server-latin-america" />;
}
