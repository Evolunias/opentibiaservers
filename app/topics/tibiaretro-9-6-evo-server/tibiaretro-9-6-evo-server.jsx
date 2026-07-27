import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-9-6-evo-server');
}

export default function Tibiaretro96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-9-6-evo-server" />;
}
