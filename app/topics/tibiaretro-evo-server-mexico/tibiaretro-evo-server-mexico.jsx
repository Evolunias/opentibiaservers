import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-evo-server-mexico');
}

export default function TibiaretroEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-evo-server-mexico" />;
}
