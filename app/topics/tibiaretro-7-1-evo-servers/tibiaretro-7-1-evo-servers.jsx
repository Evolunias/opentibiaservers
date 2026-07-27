import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-1-evo-servers');
}

export default function Tibiaretro71EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-1-evo-servers" />;
}
