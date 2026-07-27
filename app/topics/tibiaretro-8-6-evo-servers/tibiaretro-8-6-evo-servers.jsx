import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-6-evo-servers');
}

export default function Tibiaretro86EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-6-evo-servers" />;
}
