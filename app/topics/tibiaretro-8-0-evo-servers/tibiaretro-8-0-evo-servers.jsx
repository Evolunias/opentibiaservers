import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-0-evo-servers');
}

export default function Tibiaretro80EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-0-evo-servers" />;
}
