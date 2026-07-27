import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-15-evo-server');
}

export default function Tibiaretro15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-15-evo-server" />;
}
