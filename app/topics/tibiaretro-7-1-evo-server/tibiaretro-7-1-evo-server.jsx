import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-1-evo-server');
}

export default function Tibiaretro71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-1-evo-server" />;
}
