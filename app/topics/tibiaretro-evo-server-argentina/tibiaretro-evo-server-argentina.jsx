import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-evo-server-argentina');
}

export default function TibiaretroEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-evo-server-argentina" />;
}
