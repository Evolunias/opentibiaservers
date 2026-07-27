import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-72-evo-server');
}

export default function Tibiaretro772EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-72-evo-server" />;
}
