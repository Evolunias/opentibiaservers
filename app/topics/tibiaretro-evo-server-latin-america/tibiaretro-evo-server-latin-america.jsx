import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-evo-server-latin-america');
}

export default function TibiaretroEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-evo-server-latin-america" />;
}
