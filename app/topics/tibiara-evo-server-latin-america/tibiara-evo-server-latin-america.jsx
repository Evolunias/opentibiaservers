import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-evo-server-latin-america');
}

export default function TibiaraEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-evo-server-latin-america" />;
}
