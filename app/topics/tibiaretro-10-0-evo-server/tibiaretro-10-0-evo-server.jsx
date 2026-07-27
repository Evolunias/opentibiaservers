import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-10-0-evo-server');
}

export default function Tibiaretro100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-10-0-evo-server" />;
}
