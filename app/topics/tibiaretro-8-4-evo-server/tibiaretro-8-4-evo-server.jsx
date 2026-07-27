import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-4-evo-server');
}

export default function Tibiaretro84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-4-evo-server" />;
}
