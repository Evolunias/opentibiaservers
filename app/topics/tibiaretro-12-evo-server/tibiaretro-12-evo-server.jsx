import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-12-evo-server');
}

export default function Tibiaretro12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-12-evo-server" />;
}
