import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-4-evo-server');
}

export default function Tibiaretro74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-4-evo-server" />;
}
