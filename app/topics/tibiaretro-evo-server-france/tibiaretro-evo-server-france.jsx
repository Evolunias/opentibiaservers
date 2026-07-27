import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-evo-server-france');
}

export default function TibiaretroEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-evo-server-france" />;
}
