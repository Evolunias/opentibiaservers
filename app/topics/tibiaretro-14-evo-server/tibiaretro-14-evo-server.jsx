import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-14-evo-server');
}

export default function Tibiaretro14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-14-evo-server" />;
}
