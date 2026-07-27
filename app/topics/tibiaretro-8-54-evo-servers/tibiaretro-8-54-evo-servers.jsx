import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-54-evo-servers');
}

export default function Tibiaretro854EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-54-evo-servers" />;
}
