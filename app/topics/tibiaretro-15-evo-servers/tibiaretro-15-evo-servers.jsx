import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-15-evo-servers');
}

export default function Tibiaretro15EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-15-evo-servers" />;
}
