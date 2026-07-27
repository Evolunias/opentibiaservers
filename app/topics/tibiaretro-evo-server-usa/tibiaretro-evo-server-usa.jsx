import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-evo-server-usa');
}

export default function TibiaretroEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-evo-server-usa" />;
}
