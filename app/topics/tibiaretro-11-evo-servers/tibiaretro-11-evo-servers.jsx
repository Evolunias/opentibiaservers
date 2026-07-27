import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-11-evo-servers');
}

export default function Tibiaretro11EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-11-evo-servers" />;
}
