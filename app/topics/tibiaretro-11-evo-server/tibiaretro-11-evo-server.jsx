import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-11-evo-server');
}

export default function Tibiaretro11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-11-evo-server" />;
}
