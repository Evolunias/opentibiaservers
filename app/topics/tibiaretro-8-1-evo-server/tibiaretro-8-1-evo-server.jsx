import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-1-evo-server');
}

export default function Tibiaretro81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-1-evo-server" />;
}
